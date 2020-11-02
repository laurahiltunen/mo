import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [text, setText] = useState('Arvaa luku väliltä 1-100');
  const [luku, setLuku] = useState('');
  const [yritys, setYritys] = useState(0);
  

  const buttonPressed= () => {

    if (luku == arvattava) {
      Alert.alert('Arvasit oikein '+ yritys + ' yrityksellä!');
    } else if(luku < arvattava) {
      setText("Arvaamasi luku on liian pieni");
    } else if (luku > arvattava) {
      setText("Arvaamasi luku on liian suuri");
    }
    setYritys(yritys+1);
    }
  

  return (
    <View style={styles.container}>

    <Text style={{padding: 10}}>{text}</Text>

    <TextInput style={{width:200  , borderColor: 'gray', borderWidth: 1, padding: 4}}
      
    onChangeText={luku=>  setLuku(luku)}
    value={luku}/>

    <Button onPress={buttonPressed}title="Arvaa"/>
     
      
    </View> 
  );
}

const arvattava = Math.floor(Math .random() * 100) + 1; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
    justifyContent: "space-around"
  },
});
