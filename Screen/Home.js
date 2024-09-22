import { StyleSheet, Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.view}>
      {/* <Text style={{color:"red",backgroundColor:"yellow"}}>This is Home screen</Text>
      <Text style={styles.text}>Hello World</Text>

      <Text onPress={()=>navigation.navigate("ArrowFunction")}>Arrow Function</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("About")}
      >
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("ArrayMethods")}
      >
        <Text style={styles.text}>Array Methods</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Destructuring")}
      >
        <Text style={styles.text}>Destructuring</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Input")}
      >
        <Text style={styles.text}>Input</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Props")}
      >
        <Text style={styles.text}>Props</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SpreadOperator")}
      >
        <Text style={styles.text}>Spread Operator</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Usestate")}
      >
        <Text style={styles.text}>Usestate</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Useeffct")}
      >
        <Text style={styles.text}>Useeffct</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Flexbox")}
      >
        <Text style={styles.text}>Flexbox</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("FlatList")}
      >
        <Text style={styles.text}>Flatlist</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Storage")}
      >
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("StorageView")}
      >
        <Text style={styles.text}>Storage View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Usecontext")}
      >
        <Text style={[styles.text]}>Use Context</Text>
      </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    fontFamily: "timesnewroman",
    fontSize: 18,
  },
  button: {
    backgroundColor: "greenyellow",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 170,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 6, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5,
    margin: 10,
    borderRadius: 5,
    alignSelf:"center"
  },
  colors:{
    backgroundColor:"orange"
  },
  view:{
    backgroundColor:"#f3ed4w"
  }
});
