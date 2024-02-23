import { Link } from "react-router-dom";
import { Button } from "./ui/button";

type MobileNavLinksProps = {
  // define a log out function
  logout: () => void;
};

const MobileNavLinks = ({ logout }: MobileNavLinksProps) => {
  return (
    <>
      <Link
        className="flex bg-white items-center font-bold hover:text-orange-500"
        to="/user-profile"
      >
        User Profile
      </Link>
      <Button
        className=" flext items-center font-bold px-3 hover:bg-orange-500  "
        onClick={logout}
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
