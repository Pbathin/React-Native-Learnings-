import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import axios from "axios";

export default function Login({ navigation }) {
  const login = async () => {
    axios
      .post("http://192.168.43.130:5500/api/teacher/login", user)
      .then((res) => {
        console.log(res);
        navigation.navigate("StorageView");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          onChangeText={(value) => handlchagne(value, "email")}
          style={styles.input}
          placeholder="Enter your Email"
        />
        <TextInput
          onChangeText={(value) => handlchagne(value, "password")}
          style={styles.input}
          placeholder="Enter your Password"
        />
        <Button onPress={login} title="Login" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "lightgreen",
    flex: 1,
  },
  form: {
    alignSelf: "center",
  },
  input: {
    // borderWidth:2,
    backgroundColor: "white",
    height: 40,
    width: 200,
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  container: {
    backgroundColor: "#e6e6e6",
    flex: 1,
  },
});
