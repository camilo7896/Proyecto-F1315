import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  OAuthProvider
} from 'firebase/auth';
import app from '../../lib/credentialFirebase';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Img1 from '../../../public/img1.svg';
import Img2 from '../../../public/img2.svg';
import '../../App.scss';

// Firebase setup
const db = getFirestore(app);
const auth = getAuth(app);

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleMicrosoftLogin = async () => {
    const provider = new OAuthProvider('microsoft.com');
    provider.setCustomParameters({
      prompt: 'select_account'
    });
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          id: user.uid,
          email: user.email,
          role: null
        });
      }
      navigate('/home');
    } catch (error) {
      console.error('Error en login con Microsoft:', (error as Error).message);
      setError('Error al iniciar sesión con Microsoft.');
    }
  };

  const handleEmailPasswordLogin = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log('Usuario autenticado:', user);
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          id: user.uid,
          email: user.email,
          role: null
        });
      }
      navigate('/home');
    } catch (error) {
      console.error('Error en login:', error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError('Error desconocido.');
      }
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">F1315</h2>
        <form onSubmit={handleEmailPasswordLogin}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">
              Usuario
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="py-2 px-3 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>

          {error && <div className="text-red-600 text-sm mb-3">{error}</div>}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-950 text-white rounded-md hover:bg-blue-800"
            >
              Sign In
            </button>
          </div>
        </form>
        <div className="flex justify-center flex-col items-center mt-4">
          <button
            onClick={handleMicrosoftLogin}
            className="m-3 flex flex-col items-center justify-center cursor-pointer  p-2 rounded-2xl hover:bg-red-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="3vh"
              height="auto"
              viewBox="0 0 48 48"
            >
              <path fill="#ff5722" d="M6 6H22V22H6z" />
              <path fill="#4caf50" d="M26 6H42V22H26z" />
              <path fill="#ffc107" d="M26 26H42V42H26z" />
              <path fill="#03a9f4" d="M6 26H22V42H6z" />
            </svg>
            Iniciar con Microsoft
          </button>
        </div>
      </div>

      <div className="imgBanner">
        <div>
          <img className="img1" src={Img1} alt="img1" />
        </div>
        <div>
          <img className="img2" src={Img2} alt="img2" />
        </div>
      </div>
      {/* Version */}
      <div className="absolute bottom-5 text-gray-400 text-sm">
        Versión 1.0.2
      </div>
    </div>
  );
};

export default Login;
