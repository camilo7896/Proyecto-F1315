// components/MenuToggleButton.tsx
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface MenuToggleProps {
  isOpen: boolean;
  toggle: () => void;
}

const MenuToggleButton: React.FC<MenuToggleProps> = ({ isOpen, toggle }) => {
  return (
    <div className="flex justify-end">
      <button
        onClick={toggle}
        className="flex flex-col items-center p-2 bg text-white font top-4 left-4 z-50 rounded-2xl hover:text-black-500 cursor-pointer"
      >
        <FontAwesomeIcon icon={faBars} className="mr-2 w-auto" />
        {isOpen ? 'Cerrar Menú' : 'Abrir Menú'}
      </button>
    </div>
  );
};

export default MenuToggleButton;
