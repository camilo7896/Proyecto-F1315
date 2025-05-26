import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';
import { AuthProvider } from './context/AuthContextType';

import Picado from './components/picado/Picado';
import SupervisorPage from './pages/super/Supervisor';
import PicadoPage from './pages/picado/PicadoPage';
import EficencePicado from './components/eficences/EficencePicado';
import ProtectedLayout from './layouts/ProtectedLayout'; // nuevo layout
import PortecteRoutes from './routes/protecte/ProtecteRoutes';
import ConfigurationPage from './pages/admin-settings/ConfigurationPage';
import CreateMachine from './components/forms/configComponents/CreateMachine';
import CreateUser from './components/forms/configComponents/CreateUser';
import AdminData from './pages/admin-data/AdminData';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Ruta pública: login */}
          <Route path="/" element={<LoginPage />} />

          {/* Rutas protegidas con layout + menú */}
          <Route
            path="/"
            element={
              <PortecteRoutes>
                <ProtectedLayout />
              </PortecteRoutes>
            }
          >
            <Route path="home" element={<HomePage />} />
            <Route path="supervisor" element={<SupervisorPage />} />
            <Route path="eficencia" element={<EficencePicado />} />

            <Route path="picado" element={<PicadoPage />}>
              <Route path="f1315" element={<Picado />} />
              <Route path="eficence" element={<EficencePicado />} />
            </Route>

            <Route path="/supervisor" element={<SupervisorPage />} />

            <Route path="/configurations" element={<ConfigurationPage />}>
              <Route path="createMachine" element={<CreateMachine />} />
              <Route
                path="createUser"
                element={
                  <CreateUser
                    name="username"
                    label="Username"
                    type="text"
                    required={true}
                    placeholder="Enter username"
                  />
                }
              />
            </Route>

            <Route path="data" element={<AdminData />} />
            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
