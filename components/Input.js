import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      {...props}
      style={{ ...styles.input, ...props.style }}
      placeholderTextColor="#ccc"
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    color: "#ccc",
    fontSize: 16,

  },
});

export default Input;
