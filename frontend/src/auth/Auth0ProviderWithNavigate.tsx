import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Auth0ProviderWithNavigateProps = {
  children: React.ReactNode;
};

const Auth0ProviderWithNavigate = ({
  children,
}: Auth0ProviderWithNavigateProps) => {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const onRedirectCallback = (appState?: AppState, user?: User) => {
    console.log("USER", user);
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
