import React, { useState}  from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, Image } from 'react-native';

export default function App() {

  const [desc, setDesc] = useState('');
  const [recipe, setRecipes] = useState([]);

  const getRecipes= () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + desc;
    
    fetch(url)
    .then((response) => response.json())
    .then((data) => { 
      setRecipes(data.results);
    });
  }

  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          padding: 1,
          width: "90%",
          backgroundColor: "#CED0CE",
          marginLeft: "1%",
          paddingTop:  3
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.id} 
        renderItem={({item}) => {
          return (
            <View>
              <Text> {item.title} </Text>
              <Image
                style= {{height: 50, width: 50}}
                source= {{
                  uri: `${item.thumbnail}`
                }}
              /> 
            </View>
          );
        }}
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
    padding: 10,
  },
});
