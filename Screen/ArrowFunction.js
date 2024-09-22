import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ArrowFunction() {
    function simplefunction(a){
        alert("This is a simple function "+a)
    }
    const Arrow =(b,c)=>    alert("This is an arrow function" +b  +c)

  return (
    <View>
      <Text>ArrowFunction</Text>
      <Button  color ="orange" onPress={()=>simplefunction(100)} title='simpple functtion'/>
      <Button color ="green" onPress={()=>Arrow(200,300)} title='Arrow Functtion'/>

    </View>
  )
}

const styles = StyleSheet.create({})