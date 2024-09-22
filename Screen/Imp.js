import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Print ,{ name ,age,city,phone} from './exp'

export default function Imp() {
  return (
    <View>
      <Text>imp</Text>
      <text>My name is {name}, and age {age},and phone no is {phone}, and city {city}</text>
    </View>
  )
}

const styles = StyleSheet.create({})