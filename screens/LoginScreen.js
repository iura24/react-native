import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Input from "../components/Input";
import MainButton from "../components/MainButton";
import InputError from "../components/InputError";

const LoginScreen = (props) => {
  const credentials = { username: "admin", password: "123" };
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [userIsValidate, setUserIsValidate] = useState(false);
  const [passIdValidate, setpassIdValidate] = useState(false);
  const [userErrMsg, setUserErrMsg] = useState();
  const [passErrMsg, setPassErrMsg] = useState();

  const usernameHandler = (inputText) => {
    setUsername(inputText);
  };

  const passwordHandler = (inputText) => {
    setPassword(inputText);
  };

  const errMessageHandler = () => {
    setUserErrMsg(() => {
      if (username !== credentials.username) {
        return <InputError title="Invalid username" />;
      } else {
        setUserIsValidate(true);
      }
    });
    setPassErrMsg(() => {
      if (password !== credentials.password) {
        return <InputError title="Invalid password" />;
      } else {
        setpassIdValidate(true);
      }
    });
  };

  useEffect(() => {
    if (userIsValidate && passIdValidate) {
      props.onLogin(true);
    }
  }, [userIsValidate, passIdValidate]);

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
        <MainButton
          title="Login"
          style={styles.btn}
          onPress={errMessageHandler}
        />
        <TouchableOpacity onPress={() => props.onSignUpClick(true)}>
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
