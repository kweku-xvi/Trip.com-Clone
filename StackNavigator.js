import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import DealsScreen from "./screens/DealsScreen";
import MyTripsScreen from "./screens/MyTripsScreen";
import SupportScreen from "./screens/SupportScreen";
import AccountScreen from "./screens/AccountScreen";
import HotelsScreen from "./screens/HotelsScreen";
import CoachesScreen from "./screens/CoachesScreen";
import AirportTransfersScreen from "./screens/AirportTransfersScreen";
import FlightsHotelScreen from "./screens/FlightsHotelScreen";
import CarRental from "./screens/CarRental";
import TrainsScreen from "./screens/TrainsScreen";
import FlightsScreen from "./screens/FlightsScreen";
import AttractionsScreen from "./screens/AttractionsScreen";
import BookingScreen from "./screens/BookingScreen";
import MessagesScreen from "./screens/MessagesScreen";

const StackNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="home" size={24} color="blue" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Deals"
          component={DealsScreen}
          options={{
            tabBarLabel: "Deals",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="pricetag-sharp" size={24} color="blue" />
              ) : (
                <Ionicons name="pricetag-outline" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="My Trips"
          component={MyTripsScreen}
          options={{
            tabBarLabel: "My Trips",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="suitcase" size={24} color="blue" />
              ) : (
                <Entypo name="suitcase" size={24} color="gray" />
              ),
          }}
        />
        {/* <Tab.Screen
          name="Support"
          component={SupportScreen}
          options={{
            tabBarLabel: "Support",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialIcons name="support-agent" size={24} color="blue" />
              ) : (
                <MaterialIcons name="support-agent" size={24} color="gray" />
              ),
          }}
        /> */}
        <Tab.Screen
          name="Account"
          component={AccountScreen}
          options={{
            tabBarLabel: "Account",
            headerShown: false,
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Entypo name="emoji-happy" size={24} color="blue" />
              ) : (
                <Entypo name="emoji-happy" size={24} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Hotels" component={HotelsScreen} />
        <Stack.Screen name="Coaches" component={CoachesScreen} />
        <Stack.Screen name="Transfers" component={AirportTransfersScreen} />
        <Stack.Screen name="Flights & Hotel" component={FlightsHotelScreen} />
        <Stack.Screen name="Car Rental" component={CarRental} />
        <Stack.Screen name="Trains" component={TrainsScreen} />
        <Stack.Screen name="Flights" component={FlightsScreen} />
        <Stack.Screen name="Attractions" component={AttractionsScreen} />
        <Stack.Screen name="Booking" component={BookingScreen} />
        <Stack.Screen name="Messages" component={MessagesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;

const styles = StyleSheet.create({});
