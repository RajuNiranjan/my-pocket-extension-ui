import { useAuth } from "../hooks/useAuth.hook";

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <div>
      <button onClick={() => logout()}>LogOut</button>
    </div>
  );
};

export default ProfileScreen;
