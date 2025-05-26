import { Outlet } from 'react-router-dom';
import Menu from '../components/nav/Menu';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContextType';
import Navbar from '../components/nav/Navbar';

const ProtectedLayout = () => {
  const { openMenu } = useContext(AuthContext) ?? {};
  const sidebarWidth = '16rem';

  return (
    <div className="flex min-h-screen relative">
      {/* Menú lateral fijo */}
      <div
        className="fixed top-0 left-0 h-full bg-gray-900 z-30 transition-transform duration-300 ease-in-out"
        style={{
          width: sidebarWidth,
          transform: `translateX(${openMenu ? '0' : `-${sidebarWidth}`})`
        }}
      >
        <Menu openMenu={openMenu ?? false} />
      </div>

      {/* Contenedor principal con padding izquierdo dinámico */}
      <div
        className="flex flex-col flex-1 w-full transition-all duration-300"
        style={{
          paddingLeft: openMenu ? sidebarWidth : '0'
        }}
      >
        {/* Navbar arriba */}
        <div className="w-full bg-white z-40 shadow-md">
          <Navbar />
        </div>

        {/* Contenido principal */}
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProtectedLayout;
