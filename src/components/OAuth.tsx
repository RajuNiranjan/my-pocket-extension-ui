import google from "../assets/google.svg";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase";

const OAuth = () => {
  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log("results", result);
    } catch (error) {
      console.log("Google sign in error:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleGoogleClick}
        className="border p-3 justify-center rounded-xl w-full flex items-center gap-2 hover:bg-gray-100"
      >
        <img src={google} alt="google" width={20} height={20} />
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
