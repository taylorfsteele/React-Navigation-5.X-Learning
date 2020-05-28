import React, { useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useBusinesses from "../hooks/useBusinesses";
import BusinessesList from "../components/BusinessesList";

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState("");
  const [searchApi, businesses, errorMessage] = useBusinesses();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return businesses.filter((business) => {
      return business.price === price;
    });
  };

  return (
    <>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      <ScrollView>
        <BusinessesList businessesProp={filterResultsByPrice("$")} title="Cost Effective" />
        <BusinessesList businessesProp={filterResultsByPrice("$$")} title="A Bit Pricier" />
        <BusinessesList businessesProp={filterResultsByPrice("$$$")} title="Big Spender" />
      </ScrollView>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <Button title="Go to Details" onPress={() => navigation.navigate("Details")} />
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
