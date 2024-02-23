import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    const credentials =
      user?.sub && user?.email && user?.name && hasCreatedUser.current;
    if (credentials) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
        name: user.name,
      });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user?.email, user?.name, user?.sub]);
  return <div>Loading...</div>;
};

export default AuthCallbackPage;
