import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function About() {
  return (
    <View>
      <Text style={styles.text}>About screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    alignSelf:"center",
    fontFamily:"timesnewromon",
    fontSize:20,
    color:"black",
    fontDisplay: "bold",
    alignContent:"center",
    margin:350
  }
})