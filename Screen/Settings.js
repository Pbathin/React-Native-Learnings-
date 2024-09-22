import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

export default function Settings({ navigation }) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.text}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#303030",
    alignSelf: "center",
    width: 100,
    height: 30,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontFamily: "timenewroman",
    alignSelf: "center",
  },
});
