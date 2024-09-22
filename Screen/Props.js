import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Props(props) {
    const Arrow =(name, age)=>{
        //alert("My name is "+name +" " +age)
        alert(`My name is ${name} ${age}`)
    }

    const Hello =(phone)=>{
        alert(`My phone is ${phone}`)
    }
    console.log(`My phone number is ${props.phone_no}`)
    console.log(`My phone number is ${props.Name}`)

  return (
    <View>
      <Text>Props</Text>
     <Button Style={styles.headder}  onPress={()=>Arrow("Athin",19)} title='Arrow' />
     <Button Style={styles.headder}  onPress={()=><Hello/>} title='Hello'  color="green"/>

    </View>
  )
}

const styles = StyleSheet.create({
    headder:{
        backgroundColor: 'red',
    }
})