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

  const handleLoginGoogle = async (event: React.MouseEvent<SVGSVGElement>) => {
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
          </form>

          <div className="flex justify-center flex-col items-center mt-4">
            <svg
              className="cursor-pointer"
              onClick={handleLoginGoogle}
              width="40"
              height="auto"
              viewBox="0 0 256 262"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid"
            >
              <path
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
                fill="#4285F4"
              />
              <path
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
                fill="#34A853"
              />
              <path
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
                fill="#FBBC05"
              />
              <path
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
                fill="#EB4335"
              />
            </svg>
            <small>Iniciar con Google</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
