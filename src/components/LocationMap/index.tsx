import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";
import MapView, { Marker } from "react-native-maps";

import * as Location from "expo-location";

const LocationMap = () => {
  const [location, setLocation] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  //inserindo barra de pesquisa no mapa
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=${search}&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSy
                `
      );
      const json = await response.json();
      setSearchResults(json.candidates);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [search]);

  const handleSearchResults = () => {
    return searchResults.map((result, index) => {
      return (
        <View key={index}>
          <Text>{result.name}</Text>
        </View>
      );
    });
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          handleSearchResults();
        }}
      >
        <Text>Search</Text>
      </TouchableOpacity>

      <MapView
        style={styles.map}
        region={location}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsCompass={true}
        showsTraffic={true}
        showsBuildings={true}
        showsIndoors={true}
        showsIndoorLevelPicker={true}
        showsPointsOfInterest={true}
        showsScale={true}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Você está aqui"
          description="Sua localização atual"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: 300,
    height: 200,
  },
});

export default LocationMap;
