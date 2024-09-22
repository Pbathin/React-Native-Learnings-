import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UpdateStorage({ route, navigation }) {
  console.log(route.params, 111);
  const { item, index } = route.params;
  const [user, setUser] = useState(item);
  const handlchagne = (value, name) => {
    setUser({ ...user, [name]: value });
  };
  console.log(user);

  const Update = async () => {
    let old_data = await AsyncStorage.getItem("user");
    old_data = JSON.parse(old_data);
    old_data.splice(index, 1, user);
    await AsyncStorage.setItem("user", JSON.stringify(old_data));
    navigation.navigate("StorageView")
  };

  useEffect(() => {
    const Call = async () => {
      await AsyncStorage.getItem("user");
    };
    Call();
  });

  
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          value={user.name}
          onChangeText={(value) => handlchagne(value, "name")}
          style={styles.input}
          placeholder="Enter your name"
        />
        <TextInput
          value={user.phone}
          onChangeText={(value) => handlchagne(value, "phone")}
          style={styles.input}
          placeholder="Enter your Phone"
        />
        <TextInput
          value={user.email}
          onChangeText={(value) => handlchagne(value, "email")}
          style={styles.input}
          placeholder="Enter your Email"
        />
        <Button onPress={Update}  onClick={()=> window.location.reload(true)} title="Update Screen"  />
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
