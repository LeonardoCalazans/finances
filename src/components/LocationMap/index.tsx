import React, { useEffect, useState } from "react";
import { Alert, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Wrapper } from "./styles";
import * as Location from "expo-location";

type Props = {
  locations: LocationMapsType;
  setLocations: (location: LocationMapsType) => void;
};

const LocationMap = ({ locations, setLocations }: Props) => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert("Permissão negada");
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocations({
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    })();
  }, []);

  return (
    <Wrapper>
      <MapView
        style={{
          width: Dimensions.get("window").width - 50,
          height: 200,
        }}
        region={location}
        showsUserLocation={true}
        onRegionChangeComplete={(region) => {
          setLocation(region);
        }}
      >
        <Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude,
          }}
          title="Marcar aqui"
          description="Desaja marcar essa localização?"
        />
      </MapView>
    </Wrapper>
  );
};

export default LocationMap;
