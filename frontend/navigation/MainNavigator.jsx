// frontend/navigation/MainNavigator.jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from "../screens/DetailsScreen";
import Dashboard from "../screens/DashBoardScreen";
import ProfilePage from "../screens/ProfilePageScreen";

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ProfilePage" component={ProfilePage} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
