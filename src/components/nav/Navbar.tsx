import React from 'react';
import MenuToggleButton from '../buttons/MenuToggleProps';
import { AuthContext } from '../../context/AuthContextType';
import { Link } from 'react-router-dom';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Navbar = () => {
  const { openMenu, toogleMenu } = React.useContext(AuthContext) || {};
  return (
    <>
      <div className="bg-gray-900 text-slate-300 w-full h-16 flex items-center justify-between px-4">
        <MenuToggleButton
          isOpen={!!openMenu}
          toggle={toogleMenu || (() => {})}
        />
        <div>
          <Link
            to="/home"
            className=" text-white p-2 flex flex-col rounded shadow hover:bg-gray-600 transition"
          >
            <FontAwesomeIcon icon={faHouse} style={{ color: '#fcfcfc' }} />
            <small>Inicio</small>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
