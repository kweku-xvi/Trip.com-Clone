import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const MyTripsScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Trip.com",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#f0f0f0",
      },
      headerStyle: {
        backgroundColor: "blue",
        height: 35,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {/* Heading */}
      <View style={{ backgroundColor: "blue" }}>
        <Text style={{ fontSize: 30, padding: 15, color: "white" }}>
          My Trips.
        </Text>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              bottom: 5,
            }}
          >
            <AntDesign name="search1" size={20} color="white" />
            <Text style={{ color: "white", fontSize: 15, left: 3 }}>
              All Booking
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              bottom: 5,
            }}
          >
            <Octicons name="checklist" size={20} color="white" />
            <Text style={{ color: "white", fontSize: 15, left: 3 }}>
              Checklist
            </Text>
          </Pressable>

          <Pressable
            style={{
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              bottom: 5,
            }}
          >
            <MaterialCommunityIcons
              name="currency-usd"
              size={24}
              color="white"
            />
            <Text style={{ color: "white", fontSize: 15, left: 3 }}>
              Currency Convertor
            </Text>
          </Pressable>
        </View>
      </View>

      {/* Remaining Content */}
      <View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text
            numberOfLines={2}
            style={{ fontSize: 18, top: 10, fontWeight: "500" }}
          >
            It's been a while since our last trip. Plan a new
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "500", top: 5 }}>
            journey now!
          </Text>
        </View>
        <View
          style={{
            padding: 15,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Text style={{ top: 10 }}>Rapid Phone Support</Text>
          <Text style={{ top: 10 }}>Rewards for booking</Text>
        </View>
        {/* Flights, Hotels and Trains */}
        <View
          style={{
            padding: 5,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          {/* Flights  */}
          <Pressable
            onPress={() => navigation.navigate("Flights")}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome
              style={{
                width: 50,
                height: 50,
                borderColor: "#E0E0E0",
                backgroundColor: "#f0f0f0",
                borderWidth: 2,
                borderRadius: 25,
                padding: 15,
              }}
              name="plane"
              size={24}
              color="blue"
            />
            <Text style={{ top: 5 }}>Flights</Text>
          </Pressable>

          {/* Hotels */}
          <Pressable
            onPress={() => navigation.navigate("Hotels")}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <FontAwesome
              style={{
                width: 50,
                height: 50,
                borderColor: "#E0E0E0",
                backgroundColor: "#f0f0f0",
                borderWidth: 2,
                borderRadius: 25,
                padding: 15,
              }}
              name="building"
              size={24}
              color="blue"
            />
            <Text style={{ top: 5 }}>Hotels</Text>
          </Pressable>

          {/* Trains */}
          <Pressable
            onPress={() => navigation.navigate("Trains")}
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesome
              style={{
                width: 50,
                height: 50,
                borderColor: "#E0E0E0",
                backgroundColor: "#f0f0f0",
                borderWidth: 2,
                borderRadius: 25,
                padding: 15,
              }}
              name="train"
              size={24}
              color="blue"
            />
            <Text style={{ top: 5 }}>Trains</Text>
          </Pressable>
        </View>
      </View>

      {/* Options for Next Journey */}
      <View
        style={{
          top: 10,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          backgroundColor: "#f0f0f0",
        }}
      >
        <Text>Options for Next Journey</Text>
        {/* Accra */}
        <View style={{ backgroundColor: "white", top: 15 }}>
          <Text style={{ fontSize: 20, padding: 5 }}>Accra</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            {/* First Image */}
            <Pressable
              onPress={() => navigation.navigate("Booking")}
              style={{
                width: 200,
                height: 250,
                marginTop: 10,
                backgroundColor: "white",
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../assets/group-of-friends.jpg")}
                style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
                resizeMode="center"
              />
              <Text style={{ padding: 5 }}>Discounted Hotels in Accra</Text>
            </Pressable>
            {/* Second Image */}
            <Pressable
              onPress={() => navigation.navigate("Booking")}
              style={{
                width: 200,
                height: 250,
                marginTop: 10,
                backgroundColor: "white",
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../assets/bed.jpg")}
                style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
                resizeMode="center"
              />
              <Text style={{ padding: 5 }}>Ghana Hotel</Text>
            </Pressable>

            {/* Image 3 */}
            <Pressable
              onPress={() => navigation.navigate("Booking")}
              style={{
                width: 200,
                height: 250,
                marginTop: 10,
                backgroundColor: "white",
                borderRadius: 10,
                marginHorizontal: 20,
              }}
            >
              <Image
                source={require("../assets/hotel-jpg.jpg")}
                style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
                resizeMode="center"
              />
              <Text style={{ padding: 5 }}>Ghana Cocoa Hotel</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default MyTripsScreen;

const styles = StyleSheet.create({});
