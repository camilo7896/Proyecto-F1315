import { Navigate } from 'react-router-dom';
import appFirebase from '../../lib/credentialFirebase';
import { getAuth } from 'firebase/auth/cordova';
import type { PropsWithChildren } from 'react';

const auth = getAuth(appFirebase);

const PortecteRoutes = (props: PropsWithChildren) => {
  if (!auth.currentUser) {
    <div>
      <p>Cargando...</p>
    </div>;
    return <Navigate to={'/'} />;
  }
  return props.children;
};

export default PortecteRoutes;
