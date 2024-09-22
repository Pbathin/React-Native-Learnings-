import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Destructuring() {
    const cars =['mustang', 'f-150', 'bmw']
    const a =cars[0];
    const [car1, car2, car3] = cars;
    const numbers= [5+5,10+10,20+20];
    const [one,two,three] =numbers

    const vechile = {
        brand : 'Ford',
        model: 'Mustang',
        type: 'Car',
        year: '2021',
        color:'Red',
        registration:{
            city:"Manglore",
            State: "Karnataka",
            country: "India"
        }

    }
    const {brand, model, type, year} = vechile
    const {city, State, country} =vechile.registration
  return (
    <View>
      <Text style={styles.heading}>Destructuring</Text>
     <text><center>{car1},{car2},{car3}</center> </text>
      <text><center>{one},{two},{three}</center></text>
      <text><center>{brand},{model},{year}</center></text>
      <text><center>{city},{State},{country}</center></text>
    </View>
  )
}

const styles = StyleSheet.create({
   heading:{
    backgroundColor: "green"
   }
   }
)