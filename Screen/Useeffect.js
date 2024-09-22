import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";

export default function useEffectExample() {
  const [num, setNum] = useState(0);
  const [square, setSquare] = useState(0);
  const [fontSize, setFontSize] = useState(16);
  const [isBold, setIsBold] = useState(false);

  useEffect(() => {
    setSquare(num * num);
  }, [num]);

  const increaseFontSize = () => {
    setFontSize(fontSize + 2);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  const Bold = () => {
    setIsBold(!isBold);
  };

  // setInterval (()=>{
  //   setNum(num+1)

  // },1000)

  setTimeout(()=>{
    setNum(num+1)
  }, 500)

  return (
    <View>
      <Text style={styles.heading}>
        Use Effect
      </Text>
      <Text >
        Number: {num} Square: {square}
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => setNum(num + 1)}>
        <Text>Count</Text>
      </TouchableOpacity>
      <Text style={{ fontSize: fontSize, fontWeight: isBold ? "bold" : "normal" }}>
        Hello World...!
      </Text>
      <TouchableOpacity style={styles.button} onPress={increaseFontSize}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={decreaseFontSize}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={Bold}>
        <Text>Bold</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "red",
    color: "white",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "greenyellow",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 100,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    margin: 10,
  },
});
