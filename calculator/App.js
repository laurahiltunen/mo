import React, {useState, Component} from 'react';
import {StyleSheet,  Text,  View, Button, TextInput, Alert} from 'react-native';

export default function App() {
  const [ekaValue, setEkaValue] = useState('');
  const [tokaValue, setTokaValue] = useState('');
  const [tulos, setTulos] = useState('');

  
  const yhteenlasku = () => {setTulos("Vastaus:" + (ekaValue + tokaValue))}

  const vahennyslasku = () => {setTulos("Vastaus:" + (ekaValue - tokaValue))}
  

  return(

    <View style={styles.container}>

    <Text>{tulos}</Text>

    <TextInput 
    style={{width:200, borderColor:'gray', borderWidth: 1 }}
    keyboardType= "number-pad"
    onChangeText={ekaValue => setEkaValue(parseInt(ekaValue))}
    ekaValue={ekaValue}
    />

    <TextInput 
    style={{width:200, borderColor:'gray', borderWidth: 1 }}
    keyboardType= "number-pad"
    onChangeText={tokaValue => setTokaValue(parseInt(tokaValue))}
    tokaValue={tokaValue}
    />

    <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", width: 100}}>
      <Button onPress={yhteenlasku} title=" + " />
      <Button onPress={vahennyslasku} title="  -  "/>
    </View>
     
    
  
    

    </ View>
    );
  }
  
  
  const styles = StyleSheet.create({
    container:{
      height: 100,
      flex: 1,
      padding: 80,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    

  });


