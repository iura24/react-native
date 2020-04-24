import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Input from "../components/Input";
import MainButton from "../components/MainButton";

const SignUpScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <Input placeholder="Email" />
        <Input placeholder="Password" secureTextEntry={true} />
        <Input placeholder="Confirm Password" secureTextEntry={true} />
        <MainButton title="Sign Up" style={styles.btn} />
        <TouchableOpacity onPress={() => props.onBackBtn(false)}>
          <Text style={styles.text}>Back</Text>
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
  header: {
    fontSize: 35,
    color: "white",
    marginBottom: 20,
    alignSelf: "flex-start",
  },
  container: {
    width: "80%",
    alignItems: "center",
  },
  btn: {
    marginTop: 40,
    marginBottom: 20,
  },
  text: {
    color: "white",
  },
});

export default SignUpScreen;
