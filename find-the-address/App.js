import React, {useState} from 'react';
import { View, TextInput, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function App() {

  const [address, setAddress] = useState('');
  const [coordinates, setCoordinates] = useState({latitude:60.201373, longitude: 24.934041});
  const [region, setRegion] = useState({  latitude: 60.200692,
                                          longitude: 24.934302,
                                          latitudeDelta: 0.0322,
                                          longitudeDelta: 0.0221,
                                        });

  const findAddress = () => {
    fetch('https://www.mapquestapi.com/geocoding/v1/address?key=Xg7NJSbNK0AM3bRIm6DGbtxKsQBHNWSF&location='+ address)
    .then((response) => response.json())
    .then((data) => { 
      setCoordinates({latitude: data.results.locations.latLng.lat, longitude: data.results.locations.latLng.lng});
      setRegion({latitude: (coordinates.latitude-0.002), longitude: (coordinates.longitude+0.0006)});
    })
  }

  return (
   <View>
      <MapView
        style={{ width: 500, height: 630}}
        initialRegion= {{ region }}
        region={{ region }}
      > 
          
        <Marker
            coordinate={{ coordinates }}
            title={address}
        />
          
      </MapView>
      <View>
      <TextInput 
        style={{ 
          width:430, 
          borderColor: 'gray', 
          borderWidth: 1
          }}
        onChangeText={ address =>  setAddress(address)} value={address} />
      <Button onPress={ findAddress } title="Etsi"/>
      </View>
      
      </View>
  );
}

