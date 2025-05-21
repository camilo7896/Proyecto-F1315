import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import HomePage from './pages/home/HomePage';
import PortecteRoutes from './routes/protecte/PortecteRoutes';
import { AuthProvider } from './context/AuthContextType';
import './App.css';

function App() {
  return (
    <>
      <div>
        <AuthProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/home"
                element={
                  <PortecteRoutes>
                    <HomePage />
                  </PortecteRoutes>
                }
              />
              <Route path="***" element={<HomePage />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
