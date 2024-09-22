import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navigation from "./Navigation";
import axios from 'axios'

export default function Storage({navigation}) {
  const [user, setUser] = useState({});
  const handlchagne = (value, name) => {
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const Insert = async () => {
    let old_data = await AsyncStorage.getItem("user");
    old_data= JSON.parse(old_data) || []
    let user_id = 1001;
    if (old_data.length === 0 || old_data.length == null) {
      user_id = 1001;
    } else {
      user_id = old_data[old_data.length - 1].user_id + 1;
    }
    let details = {
      user_id: user_id,
      name: user.name,
      phone: user.phone,
      email: user.email,
    };
    let all_details = [...old_data, details];
    // await AsyncStorage.setItem("user", JSON.stringify(all_details), 888);
    axios.post("http://192.168.43.130:5500/api/teacher/register",user)
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log(err)
    })
    navigation.navigate('Login')
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
          onChangeText={(value) => handlchagne(value, "name")}
          style={styles.input}
          placeholder="Enter your name"
        />
        <TextInput
          onChangeText={(value) => handlchagne(value, "phone")}
          style={styles.input}
          placeholder="Enter your Phone"
        />
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
        <TextInput
          onChangeText={(value) => handlchagne(value, "address")}
          style={styles.input}
          placeholder="Enter your Address"
        />
        <Button onPress={Insert} title="Register" />
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
