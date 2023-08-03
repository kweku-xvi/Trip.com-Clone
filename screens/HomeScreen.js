import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const HomeScreen = () => {
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
      <View style={{ backgroundColor: "white", flexDirection: "row" }}>
        {/* Search Bar */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderColor: "blue",
            borderWidth: 1,
            paddingVertical: 15,
            padding: 15,
            width: 350,
            height: 50,
            marginLeft: "auto",
          }}
        >
          <Feather name="search" size={20} color="black" />
          <TextInput
            placeholder="Enter your destination"
            placeholderTextColor="black"
            style={{ backgroundColor: "white" }}
          />
        </Pressable>

        {/* Message Icon */}
        <View style={{ backgroundColor: "blue", padding: 13 }}>
          <Pressable onPress={() => navigation.navigate("Messages")}>
            <MaterialCommunityIcons
              name="android-messages"
              size={24}
              color="white"
            />
          </Pressable>
        </View>
      </View>

      <View style={{ backgroundColor: "blue", padding: 10 }} />

      {/* Icons  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 20,
        }}
      >
        {/* Hotels */}
        <Pressable
          onPress={() => navigation.navigate("Hotels")}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome
            style={{
              width: 70,
              height: 70,
              borderColor: "#E0E0E0",
              backgroundColor: "blue",
              borderWidth: 2,
              borderRadius: 35,
              padding: 25,
            }}
            name="building"
            size={24}
            color="white"
          />
          <Text style={{ top: 5 }}>Hotels</Text>
        </Pressable>

        {/* Flights  */}
        <Pressable
          onPress={() => navigation.navigate("Flights")}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome
            style={{
              width: 70,
              height: 70,
              borderColor: "#E0E0E0",
              backgroundColor: "blue",
              borderWidth: 2,
              borderRadius: 35,
              padding: 25,
            }}
            name="plane"
            size={24}
            color="white"
          />
          <Text style={{ top: 5 }}>Flights</Text>
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
              width: 70,
              height: 70,
              borderColor: "#E0E0E0",
              backgroundColor: "blue",
              borderWidth: 2,
              borderRadius: 35,
              padding: 25,
            }}
            name="train"
            size={24}
            color="white"
          />
          <Text style={{ top: 5 }}>Trains</Text>
        </Pressable>

        {/* Attractions & Tours */}
        <Pressable
          onPress={() => navigation.navigate("Attractions")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialCommunityIcons
            style={{
              width: 70,
              height: 70,
              borderColor: "#E0E0E0",
              backgroundColor: "blue",
              borderWidth: 2,
              borderRadius: 35,
              padding: 22,
            }}
            name="ferris-wheel"
            size={24}
            color="white"
          />
          <Text numberOfLines={2} style={{ top: 5 }}>
            Attractions
          </Text>
        </Pressable>
      </View>

      {/* Icons 2  */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          padding: 20,
        }}
      >
        {/* Hotels + Flight */}
        <Pressable
          onPress={() => navigation.navigate("Flights & Hotel")}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <MaterialCommunityIcons
            name="airplane-settings"
            size={24}
            color="blue"
          />
          <Text style={{ top: 5 }}>Flight + Hotel</Text>
        </Pressable>

        {/* Airport Transfers  */}
        <Pressable
          onPress={() => navigation.navigate("Transfers")}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <FontAwesome5 name="car-alt" size={24} color="blue" />
          <Text numberOfLines={2} style={{ top: 5 }}>
            Transfers
          </Text>
        </Pressable>

        {/* Car Rentals */}
        <Pressable
          onPress={() => navigation.navigate("Car Rental")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="car-sport" size={24} color="blue" />
          <Text style={{ top: 5 }}>Car Rentals </Text>
        </Pressable>

        {/* Coaches*/}
        <Pressable
          onPress={() => navigation.navigate("Coaches")}
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="bus" size={24} color="blue" />
          <Text numberOfLines={2} style={{ top: 5 }}>
            Coaches
          </Text>
        </Pressable>
      </View>
      {/* Images 1 */}
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* Image 1 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
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
            <Text style={{ padding: 5 }}>Number 1 Hotel to Visit in Ghana</Text>
          </Pressable>
          {/* Image 2 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
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
            <Text style={{ padding: 5 }}>Grand Star Hotel</Text>
          </Pressable>
        </View>
      </View>

      {/* Images 2 */}
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* Image 3 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
              height: 250,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../assets/hotel-images/hotel-4.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
            <Text style={{ padding: 5 }}>Macoba Luxury Apartments</Text>
          </Pressable>

          {/* Image 4 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
              height: 250,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../assets/hotel-images/hotel-7.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
            <Text style={{ padding: 5 }}>Asantewaa Premier Hotel</Text>
          </Pressable>
        </View>
      </View>

      {/* Images 3 */}
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          {/* Image 5 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
              height: 250,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../assets/hotel-images/hotel-9.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
            <Text style={{ padding: 5 }}>Alisa Hotel Tema</Text>
          </Pressable>

          {/* Image 6 */}
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 165,
              height: 250,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 10,
              marginHorizontal: 20,
            }}
          >
            <Image
              source={require("../assets/hotel-images/hotel-10.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
            <Text style={{ padding: 5 }}>Tang Palace Hotel</Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
