import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'

export default function Flatlists() {
    const [cars, setCars] = useState([
        {
            brand :"Ford",
            model:"Mustang",
            color: "red",
            year:2022
        },
        {
            brand :"Benz",
            model:"Gle",
            color: "white",
            year:2021
        },
        {
            brand :"BMW",
            model:"X7",
            year:2019
        },
        {
            brand :"Toyota",
            model:"Glanza",
            color: "black",
            year:2020
        },
        {
            brand :"Mahendra",
            model:"Scorphio",
            color: "Forest Green",
            year:2023
        },
        {
            brand :"Hundai",
            model:"Creta",
            color: "white",
            year:2020
        }
    ])

  return (
    <View  style={styles.body}>

      <FlatList  horizontal={true} data={cars} renderItem ={({item})=>{
        return(
            <View style={styles.card}>
                <Image style={styles.Image} source={require("../Screen/im/images.jpeg")}/>
                <Text style={styles.Text}>{item.brand}</Text>
                <Text style={styles.Text} >{item.model}</Text>
                
            </View>
        )
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:"lightblack",
    },

    card:{
        borderRadius:10,
        height: 200,
        width:200,
        margin:10,
        backgroundColor:"black",
        padding:20,
        fontFamily:"timesnewroman",
        color:"red",
        fontStyle:"italic",
        color:"white"
    

    },
   Image: {
    borderRadius:10,
    borderWidth:2,
    width:160,
    height:80,
    align:"center",
   },
   Text:{
    color:"white",
    fontSize:14,
    textAlign:"center"
   },

})


// import { StyleSheet, Text, View,FlatList ,Image} from 'react-native'

// import React, { useState } from 'react'

 

// export default function FlatLists() {

//     const [cars,setCars] = useState([

//         {

//             brand:"Ford",

//             model:"Mustang",

//             color:"red",

//             year:2022

//         },

//         {

//             brand:"bmw",

//             model:"x1",

//             color:"blue",

//             year:2020

//         },

//         {

//             brand:"Benz",

//             model:"E-class",

//             color:"black",

//             year:2015

//         },

//         {

//             brand:"Toyota",

//             model:"Supra",

//             color:"white",

//             year:2000

//         },

//         {

//             brand:"Audi",

//             model:"Rs5",

//             color:"orange",

//             year:2012

//         }

//     ])

//   return (

//     <View>

//         <FlatList horizontal={true} data={cars} renderItem={({item})=>{

//             return (

//                 <View>

//                 <View style={styles.card}>

//                     <Image style={styles.image} source={require('../Screen/im/images.jpeg')}/>

//                     <Text>{item.model}</Text>

//                 <View>

//                     <Text>{item.brand}</Text>

//                 </View>

//                 </View>

//                  <View style={styles.card}>

//                     <Text>{item.color}</Text>

//                     <Text>{item.year}</Text>

//                 </View>

                   

//                 </View>

//                 )

//   }}/>

//     </View>

//   )

// }

 

// const styles = StyleSheet.create({

//     image:{

//         height:100,

//         width:100,

//         alignSelf:'center'

//     },

//     card:{

//         height:200,

//         borderRadius:4,

//         width:200,

//         margin:10,

//         padding:10,

//         backgroundColor:"lightgreen",

//         align:'center'

 

//     }
// })