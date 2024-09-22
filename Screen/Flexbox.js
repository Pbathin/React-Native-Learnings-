import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flexbox() {
  return (
    <View style={styles.container}>
        <View style={styles.sub_container1}>
     <Text>hello</Text>
        </View>
        <View style={styles.sub_container2}>
     <Text>hello</Text>
        </View>
         </View>
  )
}

const styles = StyleSheet.create({
    sub_container1:
    {
            flex:2,
        backgroundColor:"blue",
        margin:10

   },
    sub_container2:
    {
            flex:1,
        backgroundColor:"green",
        margin:10
    },
    container:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"red",

    }
})