import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { useState } from 'react';
import appFirebase from '../../lib/credentialFirebase';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

// Initialize Firestore
const db = getFirestore(appFirebase);

//inicializacion de firebase
const auth = getAuth(appFirebase);

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLoginGoogle = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      if (!userCredential.user) throw new Error('Error al loguear con google');

      const userRef = doc(db, 'users', userCredential.user.uid);
      const userDb = await getDoc(userRef);
      if (!userDb.exists()) {
        await setDoc(userRef, {
          username: userCredential.user.email?.split('@'[0]),
          email: userCredential.user.email,
          role: null,
          avatar: 'default.png'
        });
      }
      navigate('/home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 relative">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">
            El Caballo S.A.
          </h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" htmlFor="email">
                Usuario
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
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
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  htmlFor="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {' '}
                  Remember me{' '}
                </label>
              </div>
              <a href="#" className="text-sm">
                {' '}
                Olvidaste tu contraseña?{' '}
              </a>
            </div>
            <div className="mt-6">
              <button className="cursor-pointer w-full inline-flex items-center justify-center px-4 py-2 bg-blue-950 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-blue-800 active:bg-green-500 focus:outline-none focus:border-green-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Sign In
              </button>
            </div>
            <div className="mt-6 text-center">
              <a href="#" className="underline">
                Crear cuenta
              </a>
            </div>
          </form>

          <div>
            <button onClick={handleLoginGoogle}>Iniciar con google</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
