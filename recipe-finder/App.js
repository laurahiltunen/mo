import React, { useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert } from 'react-native';

export default function App() {

  const [desc, setDesc] = useState('');
  const [recipe, setRecipes] = useState([]);

  const getRecipes= () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + {desc};
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
      setRecipes(data);
    })
    .catch((error) => { 
      Alert.alert('Sattui virhe:', error); 
    }); 
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          padding: 10,
          width: "80%",
          backgroundColor: "#CED0CE",
          marginLeft: "10%"
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text>{}</Text>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id} 
        renderItem={({item}) => <Text> {item.results.title}</Text>} 
        ItemSeparatorComponent={listSeparator}
        data={recipe} 
      />  
      <TextInput 
        style={{fontSize: 18, width: 200}} 
        value={desc} 
        placeholder="Etsi reseptejä"
        onChangeText={(desc) => setDesc(desc)} 
      />
     <Button title="Etsi" onPress={getRecipes} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 30,
  },
});
