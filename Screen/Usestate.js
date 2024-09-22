import { Button, StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";

export default function Usestate() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("Athin");
  const [Color, setColor] = useState("My favorate color is ");
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [phone,setPhone] = useState("")
  const [email,setEmail] = useState("")
  const [Addres,setAddres] = useState("")
  const [user, setUser] = useState({
    name:"",
    phone:"",
    email:"",
    Address:"",
} )
  const changeColor = (color) => {
    setColor("My favorite color is " + color);
    setBackgroundColor(color);
  };
  const haddleChange=(value,text)=>{
    setUser({...user,[text]:value})
  }

  return (
    <View>
      <Text style={styles.heading}>Usestate</Text>
      <Text>{count}</Text>
      <Button onPress={() => setCount(count + 1)} title="Count" />
      <Text>{name}</Text>
      <Button onPress={() => setName("Athin P B")} title="Change Name" />
      <Text style={{ backgroundColor: backgroundColor }}>{Color}</Text>
      <Button onPress={() => changeColor("blue")} title="Blue" />
      <Button onPress={() => changeColor("orange")} title="Orange" />
      <Button onPress={() => changeColor("green")} title="Green" />
      <Button onPress={() => changeColor("yellow")} title="Yellow" />
      <Text  >My name is :{user.name}</Text>
      <Text>My Phone is :{user.phone}</Text>
      <Text>My Email is :{user.email}</Text>
      <Text>My Address is :{user.Address}</Text>
      <TextInput onChangeText={(value)=>haddleChange(value,"name")}style={styles.input} placeholder="Enter  your Name.." />
      <TextInput onChangeText={(value)=>haddleChange(value,"phone")} style={styles.input} placeholder="Enter  your Phone" />
      <TextInput onChangeText={(value)=>haddleChange(value,"email")} style={styles.input} placeholder="Enter  your Email" />
      <TextInput onChangeText={(value)=>haddleChange(value,"Address")} style={styles.input} placeholder="Enter  your Addres" />
      

    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "red",
    color: "white",
    fontSize: 20,
  },
  input: {
    backgroundColor: "lightgreen",
    borderWidth: 2,
    borderColor: "green",
    padding: 15,
    borderRadius: 3,
    height: 40,
    color: "red",
    margin: 10,
  },
});
