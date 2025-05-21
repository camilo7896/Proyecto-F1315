import Menu from '../../components/nav/Menu';
import Navbar from '../../components/nav/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContextType';

const HomePage = () => {
  const { openMenu } = useContext(AuthContext) ?? {};
  return (
    <>
      <Navbar />
      <div
        className={` ransition-all duration-300 ease-in-out  ${openMenu ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <Menu />
      </div>
    </>
  );
};

export default HomePage;
