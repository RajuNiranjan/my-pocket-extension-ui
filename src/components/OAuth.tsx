import google from "../assets/google.svg";

const OAuth = () => {
  return (
    <div>
      <button className="border p-3  justify-center rounded-xl w-full flex items-center gap-2">
        <img src={google} alt="google" width={20} height={20} />
        Continue with Google
      </button>
    </div>
  );
};

export default OAuth;
