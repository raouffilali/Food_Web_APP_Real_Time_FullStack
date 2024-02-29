import { Auth0Provider } from "@auth0/auth0-react";
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
  const navigate = useNavigate();
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
  const audience = import.meta.env.VITE_AUTH0_AUDIENCE;

  const onRedirectCallback = () => {
    navigate("/auth-callback");
  };

  const isAuthInitialized = domain && clientId && redirectUri && audience;
  if (!isAuthInitialized) {
    throw new Error("Unable to initialiseAuth!!");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
        audience,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithNavigate;
