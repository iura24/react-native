import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

import Input from "../components/Input";
import Button from "../components/Button";
import SignUpScreen from "../screens/SignUpScreen";

const LoginScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button title="Login" style={styles.btn} />
        <TouchableOpacity onPress={props.blabla}>
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
});

export default LoginScreen;
