import React, { useState, useEffect } from "react";
import { Text, StyleSheet, Image } from "react-native";
import yelp from "../api/yelp";
import { FlatList } from "react-native-gesture-handler";

const BusinessesShowScreen = ({ route }) => {
  const [result, setResult] = useState(null);

  const getBusiness = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getBusiness(route.params.id);
  }, []);

  if (!result) return null;
  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
});

export default BusinessesShowScreen;
