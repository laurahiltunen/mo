import React, {useState, Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReactDOM from 'react-dom';

const Stack = createStackNavigator();


function LaskinScreen({ navigation }) {

  const [ekaValue, setEkaValue] = useState('');
  const [tokaValue, setTokaValue] = useState('');
  const [tulos, setTulos] = useState('');
  //flatList
  const [teksti, setTeksti] = useState('');
  const [data, setData] = useState([]);

  
  const yhteenlasku = () => {
    setTulos("Vastaus:" + (parseInt(ekaValue) + parseInt(tokaValue))); 
    setTeksti(ekaValue + ' + ' + tokaValue + " = " + (parseInt(ekaValue) + parseInt(tokaValue)));
    setData([...data, {key:teksti}]);
    
  }

  const vahennyslasku = () => {
    setTulos("Vastaus:" + (parseInt(ekaValue) - parseInt(tokaValue))); 
    setTeksti(ekaValue + " - " + tokaValue + " = " + (parseInt(ekaValue) - parseInt(tokaValue)));
    setData([...data, {key:teksti}]);
  }

  

  return (
    <View style={styles.container}>
      <Text>{tulos}</Text>
      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth: 1 }}
      keyboardType= "number-pad"
      onChangeText={ekaValue => setEkaValue(ekaValue)}
      ekaValue={ekaValue}
      />

      <TextInput 
      style={{width:200, borderColor:'gray', borderWidth: 1 }}
      keyboardType= "number-pad"
      onChangeText={tokaValue => setTokaValue(tokaValue)}
      tokaValue={tokaValue}
      />
      <View style ={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: "space-around", width: 200}}>
      <Button onPress={yhteenlasku} title=" + "/>
      <Button onPress={vahennyslasku} title="  -  "/>
      <Button 
        title="Historia"
        onPress={() => navigation.navigate('Historia', {data: data})}
      />
      </View>
    </View>
  );
}

function HistoriaScreen({ route }) {
  const { data } = route.params;
  return (
    <View style={styles.container}>
      <Text>Historia</Text>

      <FlatList
      data={ data }
      renderItem={({item}) =>
        <Text>{item.key}</Text >}
      />
    </View>
  );
}

export default function App() {
  return (
        <NavigationContainer>   
            <Stack.Navigator>
              <Stack.Screen name="Laskin" component={LaskinScreen} />
              <Stack.Screen name="Historia" component={HistoriaScreen} />
            </Stack.Navigator>
          </NavigationContainer>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: "space-around",
  },
});