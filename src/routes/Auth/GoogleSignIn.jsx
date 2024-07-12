// src/components/GoogleSignIn.jsx
import { GoogleAuthProvider, signInWithPopup, auth } from '@/firebase';

const GoogleSignIn = () => {
  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User signed in: ", user);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  return (
    <button onClick={handleGoogleSignIn}>Sign in with Google</button>
  );
};

export default GoogleSignIn;
