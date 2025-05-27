import React from 'react';
import MenuToggleButton from '../buttons/MenuToggleProps';
import { AuthContext } from '../../context/AuthContextType';

const Navbar = () => {
  const { openMenu, toogleMenu } = React.useContext(AuthContext) || {};
  return (
    <>
      <div className="bg-gray-900 text-slate-300 w-full h-16 flex items-center justify-between px-4">
        <MenuToggleButton
          isOpen={!!openMenu}
          toggle={toogleMenu || (() => {})}
        />
      </div>
    </>
  );
};

export default Navbar;
