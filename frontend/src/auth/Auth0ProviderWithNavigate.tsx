import { useCreateMyUser } from "@/api/MyUserApi";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

/**
 * Auth0ProviderWithNavigate component.
 *
 * @component
 * @param {Auth0ProviderWithNavigateProps} props - The component props.
 * @returns {JSX.Element} The rendered component.
 * @throws {Error} Throws an error if the authentication is not initialized.
 */
const Auth0ProviderWithNavigate = ({
  children,
}: Auth0ProviderWithNavigateProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const navigate = useNavigate();

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
    navigate("/auth-callback");
  };

  const isAuthInitialized = domain && clientId && redirectUri;
  if (!isAuthInitialized) {
    throw new Error("Unable to initialiseAuth!!");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
