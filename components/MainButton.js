import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const MainButton = (props) => {
  return (
    <TouchableOpacity {...props} style={{ ...styles.btn, ...props.style }}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  btn: {
    width: "60%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MainButton;
