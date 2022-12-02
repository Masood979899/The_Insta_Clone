import React from "react";
import Navigation from "./src";
import { Amplify } from "aws-amplify";
import config from "./src/aws-exports";
import AuthProvider from "./src/context/AuthContext";
import InAppBrowser from "react-native-inappbrowser-reborn";
import { Linking } from "react-native";

const urlOpener = async (url: string, redirectUrl: string) => {
  await InAppBrowser.isAvailable();
  const response  = await InAppBrowser.openAuth(url, redirectUrl, {
    showTitle: false,
    enableUrlBarHiding: true,
    enableDefaultShare: false,
    ephemeralWebSession: false,
  });

  if (response.type === "success") {
    Linking.openURL(response.url);
  }
};

const updatedconfig = {
  ...config,
  oauth: {
    ...config.oauth,
    redirectSignIn: "instaclone://",
    redirectSignOut: "instaclone://",
    urlOpener,
  },
};

Amplify.configure(updatedconfig);

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
