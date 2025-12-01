// src/context/AuthContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  type ReactNode
} from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import type { User } from 'firebase/auth';

interface AuthContextType {
  user: User | null;
  openMenu: boolean;
  toogleMenu: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const auth = getAuth();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (firebaseUser: User | null) => {
        setUser(firebaseUser);
      }
    );
    return () => unsubscribe();
  }, []);

  const [openMenu, setOpenmenu] = useState(false);

  const toogleMenu = () => {
    setOpenmenu((prev) => !prev);
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        openMenu,
        toogleMenu
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
