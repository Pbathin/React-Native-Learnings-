import { StyleSheet, Text, View } from 'react-native'
import React, {createContext, useContext} from 'react'


export default function UseContext() {
    const Function1 =() =>{
    return (
    <>
      <Text>This is functon 1</Text>
      <Function2 />
    </>
  )
    }
const Function2 =() =>{
    return (
      <View>
        <Text>This is functon 2</Text>
        <br></br>
        <Function3/>
        
      </View>
    )
  }
const Function3 =() =>{
    return (
      <View>
        <Text>This is functon 3</Text>
        <Text>My Age is {Age}</Text>
        <br></br>
        <Function4 />
      </View>
    )
  }
const Function4 =() =>{
    let {name,Age} =useContext(UserContext)
    return (
      <View>
        <Text>This is final function</Text>
        <Text>My name is {name}</Text>
        <Text>My Age is {Age}</Text>
      </View>
    )
  }

  let UserContext = createContext()
  let name ="Athin"
  let Age=20
return (
    <View>
        <UserContext.Provider value={{name,Age}}>
      <Function1 />
      </UserContext.Provider>
    </View>
  )
}

const styles = StyleSheet.create({})