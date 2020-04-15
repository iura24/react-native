import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const LoggedScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Logged Succesfully</Text>
      <TouchableOpacity onPress={() => props.onBackBtn(true)}>
          <Text style={styles.text}>Back</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
      fontSize: 30,
      color: '#28a745'
  },
  text: {
      marginTop: 30,
      fontSize: 16,
      color: 'white'
  }
});

export default LoggedScreen;
