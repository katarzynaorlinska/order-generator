import React from "react";
import AddPart from "./screens/AddPart";
import ListParts from "./screens/ListParts";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista części">
        <Stack.Screen name="Lista części" component={ListParts} />
        <Stack.Screen name="Dodaj część" component={AddPart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
