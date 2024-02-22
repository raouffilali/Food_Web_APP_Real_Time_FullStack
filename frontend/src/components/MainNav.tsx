import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant={"ghost"}
      className="font-bold hover:text-orange-500 hover:bg-white text-xl"
      onClick={async () => await loginWithRedirect()}
    >
      Sing In
    </Button>
  );
};

export default MainNav;
