import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize={"none"}
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        //Fun fact: these could be shortened to just contain a reference to the function
        //they call. Eg: onChangeText={onTermChange}
        onChangeText={(newTerm) => onTermChange(newTerm)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "snow",
    borderRadius: 7,
    height: 50,
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 37,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
