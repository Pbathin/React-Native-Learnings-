import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from './Home'
import About from './About'
import ArrowFunction from './ArrowFunction'
import ArrayMethods from './ArrayMethods'
import Destructuring from './Destructuring'
import Input from './Input'
import Props from './Props'
import SpreadOperator from './SpreadOperator'
import TernaryOperator from './TernaryOperator'
import Usestate from './Usestate'
import useeffect from './Useeffect'
import Flexbox from './Flexbox'
import Tab from './Tab'
import Flatlist from './Flatlist'
import Storage from './Storage'
import StorageView from './StorageView'
import UpdateStorage from './UpdateStorage'
import UseContext from './UseContext'
import Login from './Login'

export default function Navigation() {

  const Stack = createStackNavigator()

  return (

    <NavigationContainer>

      <Stack.Navigator ScreenOptions={{headerShown:false}}>
        
        <Stack.Screen  options={{headerShown:false}} name='tab' component={Tab} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="ArrowFunction" component={ArrowFunction} />
        <Stack.Screen name="ArrayMethods" component={ArrayMethods} />
        <Stack.Screen name="Destructuring" component={Destructuring} />
        <Stack.Screen name="Input" component={Input} />
        <Stack.Screen name="Props" component={Props} />
        <Stack.Screen name="SpreadOperator" component={SpreadOperator} />
        <Stack.Screen name="TernaryOperator" component={TernaryOperator} />
        <Stack.Screen name="Usestate" component={Usestate} />
        <Stack.Screen name="Useeffect" component={useeffect} />
        <Stack.Screen name="Flexbox" component={Flexbox} />
        <Stack.Screen name="FlatList" component={Flatlist} />
        <Stack.Screen name="Storage" component={Storage} />
        <Stack.Screen name="StorageView" component={StorageView} />
        <Stack.Screen name="UpdateStorage" component={UpdateStorage} />
        <Stack.Screen name="Usecontext" component={UseContext} />
        <Stack.Screen name="Login" component={Login} />



      </Stack.Navigator>

    </NavigationContainer>

  )
}

const styles = StyleSheet.create({})