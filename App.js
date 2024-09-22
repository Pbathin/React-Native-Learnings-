import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button , ScrollView} from 'react-native';
import Home from './Screen/Home';
import About from './Screen/About';
import ArrowFunction from './Screen/ArrowFunction';
import ArrayMethods from './Screen/ArrayMethods';
import Input from './Screen/Input';
import Destructuring from './Screen/Destructuring';
import Imp from './Screen/imp';
import TernaryOperator from './Screen/TernaryOperator';
import SpreadOperator from './Screen/SpreadOperator';
import Props from './Screen/Props';
import Useeffect from './Screen/Useeffect';
import Imag from './Screen/Imag';
import Navigation from './Screen/Navigation';
import Usestate from './Screen/Usestate';


export default function App() { 
  let a = 1;
  var b = 2;
  const c = 3;
  a = 10
  b = 20
  // c = 30

  function Hello(){
    alert("This is a Hello Function")
  }
  // Hello()

let phone = 7899877446
let name ="Athin"
  return (
  <Navigation/>
   
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lavender', 
    alignItems: 'center',
    justifyContent: 'center',
  },
});


 // <View style={styles.container}>
    //   <Home/>
    //   <About/>
    //   <Text>{a},{b},{c}</Text>
    //   <Text>hello world</Text>
    //   <Text>hello world</Text>
    //   <Text>hello world</Text>
    //   <StatusBar style="auto" />
    //   <Button onPress={Hello}  title='click here' color='red'/>
    //   <ArrowFunction/>
    //   <ArrayMethods/>
    //   <Input/>
    //   <Destructuring/>
    //   <Imp/>
    //   <TernaryOperator/>
    //   <SpreadOperator/>
    //   <Props phone_no={phone}  Name={name}/>
    //   <Usestate/>
    //   <Useeffect/>
    //   <Imag/>
    //   <Navigation/>
    // </View>
