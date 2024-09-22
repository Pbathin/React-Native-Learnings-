import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TernaryOperator() {
    let a =20
    let b=20
    
    const check1 = () =>{
        if (a>b){
            alert("a is  greater then b ")
        } else if (a>15){
            alert("a is greater then 15")
        }
        else {
            alert(" a is smaller then b")
        }
     }

     const check=()=>a>b?alert("a is  greater than b"): a>15? alert("a is greater then 15") : alert(" a is smaller than b")
  return (
    <View>
      <Text>TernaryOperator</Text>
      <Button onPress={check1} title ="check1"/>
      <Button onPress={check} title ="check"/>
    </View>
  )
}

const styles = StyleSheet.create({

})