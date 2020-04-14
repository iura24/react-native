import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";
import Input from "../components/Input";
import Button from "../components/Button";

const SignUpScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <Button title="Sign Up" style={styles.btn}/>
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
      width: '80%',
      alignItems: 'center'
  },
  btn: {
      marginTop: 40
  }
});

export default SignUpScreen;
