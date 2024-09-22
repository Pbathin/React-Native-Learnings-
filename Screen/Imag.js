import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function images() {
  return (
    <View>
      <Text style={styles.heading} >images</Text>
      <Image style={styles.image} source= {require('../Screen/im/image.jpg')}/>
      <Image style={styles.image} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6Rod6Zv5NUMyCPUzTpMMcA8Ib4LlDQL6w4g&usqp=CAU"}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: "yellow",
    color: "green",
    fontSize: 20,
    textAlign: "center",
    paddingVertical: 10,
    marginLeft:10,
    alignSelf:"center"
  },
  image:{
    height:50,
    width:50,
    margin:10,
   
  }  
})