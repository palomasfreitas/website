import { useState } from 'react';
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth';
import { auth } from '../core/firebase';

const useFirebaseSignIn = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<unknown>();
  const [user, setUser] = useState<UserCredential | undefined>();

  async function signIn(email: string, password: string): Promise<UserCredential | undefined> {
    setLoading(true);
    let credential: UserCredential;

    try {
      credential = await signInWithEmailAndPassword(auth, email, password);
      setUser(credential);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setLoading(false);
    }

    return credential;
  }

  return {
    user,
    error,
    isLoading,
    signIn,
  };
};

export default useFirebaseSignIn;