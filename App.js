import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import LoggedScreen from "./screens/LoggedScreen";

export default function App() {
  const [isLogin, setIsLogIn] = useState(true);

  const selectScreenHandler = (isLogin) => {
    setIsLogIn(isLogin);
  };

  let content = <LoginScreen onSignUpBtn={selectScreenHandler} />;
  // let content = <LoggedScreen onBackBtn={selectScreenHandler}/>;
  if (isLogin === false) {
    content = <SignUpScreen onBackBtn={selectScreenHandler} />;
  }

  return <View style={styles.screen}>{content}</View>;
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#003f5c",
  },
});
