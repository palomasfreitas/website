import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

class Auth {
  static getCurrentUser() {
    return auth.currentUser?.email;
  }

  static signOut() {
    signOut(auth);
  }
}


export default Auth;