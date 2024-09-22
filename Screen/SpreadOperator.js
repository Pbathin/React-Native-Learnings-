import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SpreadOperator() {
    const numberOne = [1,2,3,4];
    const numberTwo = [5,6,7];
    const numbersCombined = [...numberOne,...numberTwo];

    //destructing
    const numbers =[1,2,3,4,5,6];
    const [one, two, ...rest] = numbers;
    
    //object
    const myVechile={
        brand : 'Ford',
        model: 'Mustang',
        color:'Red'
    }
     const updateMyVechile= {
        type: 'Car',
        year: '2021',
        color:'yellow'
     }
     const student ={
        name: "Athin",
        age:"20",
        course: "BE",
        address:"Manglore"
     }
     const MyUpdateVechicle ={ ...myVechile, ...updateMyVechile}
     console.log(myVechile)

     const Click=()=>{
      let value = {...student   }
     }
  return (
    <View>
      <Text style={styles.heading}>SpreadOperator</Text>
      <Text> {numberOne}</Text>
      <Text> {numberTwo}</Text>
      <Text> {numbersCombined}</Text>
     <Text>{numbers}</Text>
    <Button onPress={student} title='Click here'/>
    </View>
  )
}

const styles = StyleSheet.create({
    heading:{
        backgroundColor:"red",
        color:"white",
        fontSize:20,
        fontWeight:600
    }
})
