// frontend/navigation/DashboardNavigator.jsx
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Dashboard from "../screens/DashBoardScreen";
import ProfilePage from "../screens/ProfilePageScreen";
import DetailsScreen from "../screens/DetailsScreen";

const Stack = createStackNavigator();

const DashboardNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Dashboard" component={Dashboard} />
    <Stack.Screen name="ProfilePage" component={ProfilePage} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

export default DashboardNavigator;
