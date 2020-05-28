import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BusinessDetail from "./BusinessDetail";

const BusinessesList = ({ title, businessesProp }) => {
  const navigation = useNavigation();
  if (!businessesProp.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={businessesProp}
        keyExtractor={(businessesProp) => businessesProp.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("BusinessShow", { id: item.id })}>
              <BusinessDetail business={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
});

export default BusinessesList;
