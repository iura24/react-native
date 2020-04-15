import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const InputError = (props) => {
  return (
    <View style={styles.errorWrapper}>
      <Text style={styles.error}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorWrapper: {
    alignSelf: "flex-start",
  },
  error: {
    color: "red",
  },
});

export default InputError;
