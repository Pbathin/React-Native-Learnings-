import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ArrayMethods() {
    const fruites=["Apple", "Orange","Kiwi","Mango"]
    const mapping= fruites.map((index, item)=><Text>{item+1} {index}</Text>)
  return( 
    <View>
      <Text>ArrayMethods</Text>
     { /*<Text> {fruites[0]}</Text>
      <Text> {fruites[1]}</Text>
      <Text> {fruites[2]}</Text>
      <Text> {fruites[3]}</Text>*/}
    
  {mapping}
  </View>)
}

const styles = StyleSheet.create({})