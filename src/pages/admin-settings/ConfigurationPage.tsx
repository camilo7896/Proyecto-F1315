import { Link, Outlet } from 'react-router-dom';
import ConfigData from '../../components/nav/data/configData.tsx';
import '../../App.scss';
function ConfigLinkOpction({
  item
}: {
  item: { title: string; slug: string };
}) {
  return (
    <Link to={`/configurations/${item.slug}`}>
      <button className="button">{item.title}</button>
    </Link>
  );
}

const ConfigurationPage = () => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6 md:space-y-8">
      {/* Botones */}
      <div className="flex flex-wrap justify-center gap-4">
        {ConfigData.map((item, index) => (
          <ConfigLinkOpction key={index} item={item} />
        ))}
      </div>

      {/* Contenido dinámico */}
      <div className="w-full max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
};

export default ConfigurationPage;
