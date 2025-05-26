import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import appFirebase from '../../lib/credentialFirebase';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import optiondata from './data/optionMenu';

interface UserSatate {
  user: string | null;
  photoURL: string | null;
}

const auth = getAuth(appFirebase);
const data = optiondata;

const Menu: React.FC<{ openMenu: boolean }> = ({ openMenu }) => {
  const [state, setstate] = useState<UserSatate>({
    user: null,
    photoURL: null
  });

  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userLogued) => {
      if (userLogued) {
        setstate({
          user: userLogued.displayName || userLogued.email || userLogued.uid,
          photoURL: userLogued.photoURL || null
        });
      } else {
        setstate({ user: null, photoURL: null });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('Sesion cerrada correctamente');
        navigate('/');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {/* Menú en la derecha, con efecto deslizable */}
      <div
        id="menu"
        className={`bg-gray-900 min-h-screen z-10 text-slate-300 w-64 fixed top-0 h-screen overflow-y-scroll transition-transform duration-300 ease-in-out  ${openMenu ? 'translate-x-0' : 'translate-x-1'} right-0`}
      >
        <div id="logo" className="my-4 px-6">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            El Caballo<span className="text-blue-500">S.A</span>.
          </h1>
        </div>
        <div id="profile" className="px-6 py-10">
          <p className="text-slate-500">Bienvenido,</p>
          <a href="#" className="inline-flex space-x-2 items-center">
            <span>
              {state.photoURL ? (
                <img
                  className="rounded-full w-full h-auto"
                  src={state.photoURL}
                  alt=""
                />
              ) : (
                <div>Sin foto</div>
              )}
            </span>
            <span className="text-sm md:text-base font-bold">
              {state.user ? (
                <p>{state.user}</p>
              ) : (
                <p>No hay usuario autenticado</p>
              )}
            </span>
          </a>
        </div>
        <div className="flex justify-center items-center pb-5">
          <button
            onClick={handleLogout}
            className="bg-red-600 w-full rounded-2xl mx-5 hover:bg-white/8 cursor-pointer"
          >
            Salir
          </button>
        </div>
        <div id="nav" className="w-full px-6">
          {data.map((item, index) => {
            return (
              <Link
                key={index}
                to={item.url}
                className="w-full px-2 inline-flex space-x-2 items-center border-b border-slate-700 py-3 hover:bg-white/5 transition ease-linear duration-150"
              >
                <div className="flex flex-col">
                  <span className="text-lg font-bold leading-5 text-white">
                    {item.title}
                  </span>
                  <span className="text-sm text-white/50 hidden md:block">
                    {item.subtitle}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Menu;
