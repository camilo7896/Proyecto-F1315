import { Link, Outlet } from 'react-router-dom';
import PicadoData from '../../components/nav/data/picadoData.tsx';
import '../../App.scss';

function PicadoLinkOption({ item }: { item: { title: string; slug: string } }) {
  return (
    <Link to={`/picado/${item.slug}`}>
      <button className="button">{item.title}</button>
    </Link>
  );
}

const PicadoPage = () => {
  return (
    <>
      <div className="flex flex-col items-center p-4 space-y-6 md:space-y-8">
        {/* Botones */}
        <div className="flex flex-wrap justify-center gap-4">
          {PicadoData.map((item, index) => (
            <PicadoLinkOption key={index} item={item} />
          ))}
        </div>

        {/* Contenido dinámico */}
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default PicadoPage;
