import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default function Input() {
  const [amount1, setAmount1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [nbr, setnbr] = useState('');

  const handleAdd = () => {
      const sum = parseFloat(amount1) + parseFloat(amount2);
      alert("Sum of Amount 1 and Amount 2 is : " +sum)
    }
  const checkint =()=>{
    if (nbr%2==0){
      alert("The entered number is an even number")
    }
    else {
      alert("The enetered number is an odd number")
    }
  }

  return (
    <View>
      <Text style={styles.text}>Input</Text>
      <TextInput
        style={styles.input}
        placeholder='Amount 1'
        onChangeText={text => setAmount1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder='Amount 2'
        onChangeText={text => setAmount2(text)}
        keyboardType="numeric"
      />
      <Button title="Add" onPress={handleAdd} />
      <TextInput
        style={styles.input}
        placeholder='Enter a number'
        onChangeText={text => setnbr(text)}
        keyboardType="numeric"
      />
      <Button title="Find" onPress={checkint} />

    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 5,
    margin: 10,
  },
  text: {
    backgroundColor: "red",
    width: 200,
  }
});
