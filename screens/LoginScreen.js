import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import InputError from "../components/InputError";

const LoginScreen = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userErrMsg, setUserErrMsg] = useState();
  const [passErrMsg, setPassErrMsg] = useState();

  const name = "admin";
  const pass = "pass";

  const usernameHandler = (inputText) => {
    setUsername(inputText);
  };

  const passwordHandler = (inputText) => {
    setPassword(inputText);
  };

  const errMessageHandler = () => {
      let x;
    setUserErrMsg(() => {
      if (name !== username) {
        return <InputError title="Invalid username" />;
      }
    });
    setPassErrMsg(() => {
      if (password !== pass) {
        return <InputError title="Invalid password" />;
      }
    });
    return x = 2;
  };
  console.log(errMessageHandler);
  const onLoginHandler = () => {};

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Login</Text>
        <Input placeholder="Username" onChangeText={usernameHandler} />
        {userErrMsg}
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={passwordHandler}
        />
        {passErrMsg}
        <Button title="Login" style={styles.btn} onPress={errMessageHandler} />
        <TouchableOpacity onPress={() => props.onSignUpBtn(false)}>
          <Text style={styles.text}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    alignItems: "center",
  },
  signUpBtn: {
    backgroundColor: "#ccc",
    marginTop: 5,
    color: "black",
  },
  btn: {
    marginTop: 20,
    marginBottom: 10,
  },
  text: {
    color: "white",
  },
  header: {
    fontSize: 30,
    color: "white",
    marginBottom: 20,
  },
});

export default LoginScreen;
