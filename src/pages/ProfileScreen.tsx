import { Button } from "@/components/ui/button";
import { useAuth } from "../hooks/useAuth.hook";

const ProfileScreen = () => {
  const { logout } = useAuth();

  return (
    <div>
      <Button onClick={() => logout()}>LogOut</Button>
    </div>
  );
};

export default ProfileScreen;
