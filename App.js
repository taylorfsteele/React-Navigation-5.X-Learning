import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./src/screens/DetailsScreen";
import SearchScreen from "./src/screens/SearchScreen";
import BusinessesShowScreen from "./src/screens/BusinessesShowScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Search">
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ title: "Business Search" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Details Screen" }}
        />
        <Stack.Screen
          name="BusinessShow"
          component={BusinessesShowScreen}
          options={{ title: "Single Business Screen" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
