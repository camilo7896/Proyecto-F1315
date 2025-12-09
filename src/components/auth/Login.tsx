import { getAuth, signInWithPopup, OAuthProvider } from 'firebase/auth';
import app from '../../lib/credentialFirebase';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../App.scss';
import './Login.scss';

// Firebase setup
const db = getFirestore(app);
const auth = getAuth(app);

// Componente de background industrial minimalista
const IndustrialBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="industrial-background">
      {/* Rejilla industrial sutil */}
      <div
        className="industrial-grid"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
        }}
      />

      {/* Elementos industriales minimalistas */}
      <div className="industrial-elements">
        <div className="element element-1"></div>
        <div className="element element-2"></div>
        <div className="element element-3"></div>
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const provider = new OAuthProvider('microsoft.com');
      provider.setCustomParameters({
        prompt: 'select_account',
        tenant: 'organizations' // Para cuentas organizacionales
      });

      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Verificar o crear usuario en Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);

      if (!userDoc.exists()) {
        await setDoc(userDocRef, {
          id: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: 'operator',
          provider: 'microsoft',
          createdAt: new Date(),
          lastLogin: new Date()
        });
      } else {
        // Actualizar último login
        await setDoc(
          userDocRef,
          {
            lastLogin: new Date()
          },
          { merge: true }
        );
      }

      // Redirigir al dashboard
      navigate('/dashboard');
    } catch (error: unknown) {
      console.error('Error en login con Microsoft:', error);

      // Mensajes de error específicos
      if ((error as { code?: string }).code === 'auth/popup-closed-by-user') {
        setError('Inicio de sesión cancelado por el usuario.');
      } else if ((error as { code?: string }).code === 'auth/popup-blocked') {
        setError(
          'El popup fue bloqueado. Por favor, permite ventanas emergentes.'
        );
      } else if (
        (error as { code?: string }).code === 'auth/unauthorized-domain'
      ) {
        setError('Dominio no autorizado para Microsoft login.');
      } else {
        setError(
          'Error al iniciar sesión con Microsoft. Por favor, intente nuevamente.'
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Intento automático si hay sesión guardada
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user && !isLoading) {
        // Usuario ya autenticado, redirigir
        navigate('/dashboard');
      }
    });

    return unsubscribe;
  }, [navigate, isLoading]);

  return (
    <div className="login-container">
      {/* Fondo industrial */}
      <IndustrialBackground />

      <motion.div
        className="login-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        {/* Encabezado */}
        <div className="login-header">
          <motion.div
            className="logo-container"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <div className="industrial-logo">
              <div className="logo-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h1 className="logo-text">F1315</h1>
            </div>
            <p className="logo-subtitle">PLATAFORMA DE PICADO</p>
          </motion.div>

          <motion.div
            className="system-status"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="status-indicator active"></div>
            <span className="status-text">SISTEMA DISPONIBLE</span>
          </motion.div>
        </div>

        {/* Instrucciones de inicio de sesión */}
        <motion.div
          className="login-instructions"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="instruction-icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h2 className="instruction-title">Autenticación Corporativa</h2>
          <p className="instruction-text">
            Utilice sus credenciales institucionales para acceder a la
            plataforma. Solo se permiten cuentas corporativas autorizadas.
          </p>
        </motion.div>

        {/* Botón principal de Microsoft */}
        <motion.div
          className="login-main-action"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            type="button"
            onClick={handleMicrosoftLogin}
            className="microsoft-login-button"
            disabled={isLoading}
            whileHover={!isLoading ? { scale: 1.02 } : {}}
            whileTap={!isLoading ? { scale: 0.98 } : {}}
          >
            <div className="button-content">
              <div className="microsoft-logo">
                <svg
                  viewBox="0 0 23 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 1L1 5.5V11.5H11.5V1Z" fill="#F35325" />
                  <path d="M22 5.5L11.5 1V11.5H22V5.5Z" fill="#81BC06" />
                  <path d="M1 17.5L11.5 22V11.5H1V17.5Z" fill="#05A6F0" />
                  <path d="M11.5 22L22 17.5V11.5H11.5V22Z" fill="#FFBA08" />
                </svg>
              </div>
              <div className="button-text">
                {isLoading ? (
                  <>
                    <div className="spinner"></div>
                    <span>Conectando con Microsoft...</span>
                  </>
                ) : (
                  <>
                    <span className="button-main-text">
                      Iniciar Sesión con Microsoft 365
                    </span>
                    <span className="button-subtext">
                      Cuentas corporativas autorizadas
                    </span>
                  </>
                )}
              </div>
              <div className="button-arrow">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </motion.button>

          {error && (
            <motion.div
              className="error-message"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <svg
                className="error-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 9V13"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M12 17V17.01"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M7.84308 3.80211C9.8718 2.6007 10.8862 2 12 2C13.1138 2 14.1282 2.6007 16.1569 3.80211L17.8441 4.80309C19.8728 6.0045 20.8872 6.6052 21.4436 7.58646C22 8.56772 22 9.78109 22 12.2077V12.7923C22 15.2189 22 16.4323 21.4436 17.4135C20.8872 18.3948 19.8728 18.9955 17.8441 20.1969L16.1569 21.1979C14.1282 22.3993 13.1138 23 12 23C10.8862 23 9.8718 22.3993 7.84308 21.1979L6.15592 20.1969C4.12721 18.9955 3.11285 18.3948 2.55643 17.4135C2 16.4323 2 15.2189 2 12.7923V12.2077C2 9.78109 2 8.56772 2.55643 7.58646C3.11285 6.6052 4.12721 6.0045 6.15592 4.80309L7.84308 3.80211Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
              <span>{error}</span>
            </motion.div>
          )}
        </motion.div>

        {/* Información de seguridad */}
        <motion.div
          className="security-info"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="security-badge">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 12L11 14L15 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 3L20 7.5V12C20 17.523 16.418 22.357 12 23C7.582 22.357 4 17.523 4 12V7.5L12 3Z"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
            <span>Conexión segura • Autenticación corporativa</span>
          </div>
        </motion.div>

        {/* Enlaces de soporte */}
        <motion.div
          className="support-links"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="#" className="support-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 13V19C18 20.1046 17.1046 21 16 21H5C3.89543 21 3 20.1046 3 19V8C3 6.89543 3.89543 6 5 6H11"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path d="M15 3H21V9" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10 14L21 3" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span>Soporte Técnico</span>
          </a>
          <a href="#" className="support-link">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <path
                d="M12 8V12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M12 16H12.01"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <span>Recuperar Acceso</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Versión del sistema */}
      <motion.div
        className="version-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="version-badge">
          <div className="version-dot active"></div>
          <span className="version-text">v1.5.2 • INDUSTRIAL PLATFORM</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
