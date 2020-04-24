import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Input from "../components/Input";
import MainButton from "../components/MainButton";
import InputError from "../components/InputError";

const LoginScreen = (props) => {
  const credentials = { username: "admin", password: "123" };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userErrMsg, setUserErrMsg] = useState();
  const [passErrMsg, setPassErrMsg] = useState();

  const usernameHandler = (inputText) => {
    setUsername(inputText);
  };

  const passwordHandler = (inputText) => {
    setPassword(inputText);
  };

  const validateLogin = () => {
    setUserErrMsg(() => {
      if (username !== credentials.username) {
        return <InputError title="Invalid username" />;
      }
    });
    setPassErrMsg(() => {
      if (password !== credentials.password) {
        return <InputError title="Invalid password" />;
      }
    });
    if (
      credentials.username === username &&
      credentials.password === password
    ) {
      props.navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Login</Text>
        <Input placeholder="Username" onChangeText={usernameHandler} />
        {userErrMsg}
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={passwordHandler}
        />
        {passErrMsg}
        <MainButton
          title="Login"
          style={styles.loginBtn}
          onPress={validateLogin}
        />
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("SignUp");
          }}
        >
          <Text style={styles.signUpBtn}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#003f5c",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    alignItems: "center",
  },
  signUpBtn: {
    color: "white",
  },
  loginBtn: {
    marginVertical: 18,
  },
  headerTitle: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },
});

export default LoginScreen;
