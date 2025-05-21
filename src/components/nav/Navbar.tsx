import React from 'react';
import MenuToggleButton from '../buttons/MenuToggleProps';
import { AuthContext } from '../../context/AuthContextType';

const Navbar = () => {
  const { openMenu, toogleMenu } = React.useContext(AuthContext) || {};
  return (
    <>
      <MenuToggleButton isOpen={!!openMenu} toggle={toogleMenu || (() => {})} />
    </>
  );
};

export default Navbar;
