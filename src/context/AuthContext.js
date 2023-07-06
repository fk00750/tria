import { createContext, useContext, useEffect, useState } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth } from './../firebase';

const AuthContext = createContext();

const googleProvider = new GoogleAuthProvider();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [localAuth, setLocalAuth] = useState(localStorage.getItem('authExpress'));

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({ permissions: localAuth.permissions, ...user });
      } else {
        setUser(null)
      }

      setIsLoading(false);
    })

    return () => unsubscribe();

  }, [``])

  async function login() {
    return signInWithPopup(auth, googleProvider);
  }

  async function logout() {
    setUser(null);
    localStorage.removeItem('authExpress');
    await signOut(auth);
  }

  const context = { user, login, logout };

  return (
    <AuthContext.Provider value={context}>
      {isLoading ? <h3>Loading...</h3> : children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);