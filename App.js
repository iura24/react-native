import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoggedScreen from "./screens/LoggedScreen";

export default function App() {
  const [credentialsValidated, setCredentialValidated] = useState(false);
  const [isSingUpScreen, setIsSignUpScreen] = useState(false);

  const validateCredentials = (isValidated) => {
    setCredentialValidated(isValidated);
  };

  const signUpHandler = (isClicked) => {
    setIsSignUpScreen(isClicked);
  };

  let content = <LoginScreen onLogin={validateCredentials} onSignUpClick={signUpHandler} />;

  if (credentialsValidated) {
    content = <LoggedScreen onBackBtn={setCredentialValidated}/>;
  }

  if (isSingUpScreen) {
    content = <SignUpScreen onBackBtn={setIsSignUpScreen}/>;
  }

  return <View style={styles.screen}>{content}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#003f5c",
  },
});
