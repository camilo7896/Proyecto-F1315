import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';
import { AuthProvider } from './context/AuthContextType';

import SupervisorPage from './pages/super/Supervisor';
import PicadoPage from './pages/picado/PicadoPage';
import EficencePicado from './components/eficences/EficencePicado';
import ProtectedLayout from './layouts/ProtectedLayout'; // nuevo layout
import ConfigurationPage from './pages/admin-settings/ConfigurationPage';
import CreateMachine from './components/forms/configComponents/CreateMachine';
import CreateUser from './components/forms/configComponents/CreateUser';
import AdminData from './pages/admin-data/AdminData';
import Picado from './components/picado/Picado';
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute';

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
              <ProtectedRoute
                allowedRoles={['admin', 'supervisor', 'operator', 'superadmin']}
              >
                <ProtectedLayout />
              </ProtectedRoute>
            }
          >
            <Route path="home" element={<HomePage />} />
            <Route
              path="supervisor"
              element={
                <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                  <SupervisorPage />
                </ProtectedRoute>
              }
            />
            <Route path="eficencia" element={<EficencePicado />} />

            <Route path="picado" element={<PicadoPage />}>
              <Route path="f1315" element={<Picado />} />
              <Route path="eficence" element={<EficencePicado />} />
            </Route>

            <Route
              path="/supervisor"
              element={
                <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                  <SupervisorPage />
                </ProtectedRoute>
              }
            />

            <Route
              path="/configurations"
              element={
                <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                  <ConfigurationPage />
                </ProtectedRoute>
              }
            >
              <Route
                path="createMachine"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                    <CreateMachine />
                  </ProtectedRoute>
                }
              />
              <Route
                path="createUser"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                    <CreateUser
                      name="username"
                      label="Username"
                      type="text"
                      required={true}
                      placeholder="Enter username"
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="editingRegister"
                element={<EficencePicado editable={true} />}
              />
            </Route>

            <Route
              path="data"
              element={
                <ProtectedRoute allowedRoles={['admin', 'superadmin']}>
                  <AdminData />
                </ProtectedRoute>
              }
            />

            <Route path="*" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
