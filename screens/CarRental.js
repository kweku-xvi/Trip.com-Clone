import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { Image } from "react-native";

const CarRental = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Car Rentals",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
      },
      headerStyle: {
        backgroundColor: "blue",
        height: 35,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  const customButton = (onConfirm) => {
    return (
      <Button
        onPress={onConfirm}
        style={{
          container: { width: "80%", marginHorizontal: "3%" },
          text: { fontSize: 20 },
        }}
        primary
        title="Submit"
      />
    );
  };
  return (
    <ScrollView>
      <View style={{ margin: 20, backgroundColor: "white", borderRadius: 15 }}>
        {/* Car Type */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderWidth: 0,
            paddingVertical: 15,
          }}
        >
          <TextInput
            placeholderTextColor="black"
            placeholder={"Enter car type"}
          />
        </Pressable>

        {/* Selected Dates */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderColor: "black",
            borderWidth: 0,
            paddingVertical: 15,
          }}
        >
          <DatePicker
            style={{
              width: 350,
              height: 30,
              borderRadius: 0,
              borderWidth: 0,
              borderColor: "transparent",
            }}
            customStyles={{
              placeholderText: {
                fontSize: 15,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
                color: "black",
              },
              headerStyle: {
                backgroundColor: "blue",
              },
              contentText: {
                fontSize: 15,
                flexDirection: "row",
                alignItems: "center",
                marginRight: "auto",
              },
            }}
            selectedBgColor="blue"
            customButton={(onConfirm) => customButton(onConfirm)}
            onConfirm={(startDate, endDate) =>
              setSelectedDates(startDate, endDate)
            }
            allowFontScaling={false}
            placeholder={"April 27, 2018 - July 10, 2018"}
            mode={"range"}
          />
        </Pressable>

        {/* Pick up time */}
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderWidth: 0,
            paddingVertical: 15,
          }}
        >
          <TextInput
            placeholderTextColor="black"
            placeholder={"Enter pick up time"}
          />
        </Pressable>

        {/* Search Button */}
        <Pressable
          // onPress={() => searchPlaces(route?.params.input)}
          style={{
            paddingHorizontal: 10,
            //borderColor: "#FFC72C",
            borderColor: "black",
            borderWidth: 0,
            paddingVertical: 15,
            backgroundColor: "blue",
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 15,
              fontWeight: "500",
              color: "white",
            }}
          >
            Search
          </Text>
        </Pressable>
      </View>

      {/* Promo Code */}
      <Pressable
        style={{
          gap: 10,
          borderWidth: 0,
          backgroundColor: "white",
          width: 350,
          alignSelf: "center",
          borderRadius: 15,
          flexDirection: "row",
          padding: 20,
        }}
      >
        <Text style={{ fontSize: 23 }}>Promo Codes</Text>
      </Pressable>

      {/* My Bookings */}
      <Pressable
        style={{
          gap: 10,
          borderWidth: 0,
          backgroundColor: "white",
          width: 350,
          alignSelf: "center",
          borderRadius: 15,
          flexDirection: "row",
          padding: 20,
          top: 10,
        }}
      >
        <Text style={{ fontSize: 23 }}>My Bookings</Text>
      </Pressable>

      {/* Popular  Rentals */}
      <View style={{ flex: 1, width: "100%", top: 20 }}>
        <Image
          source={require("../assets/popular-rentals.jpg")}
          style={{ flex: 1, width: "100%", height: 150 }}
          resizeMode="center"
        />
      </View>

      {/* Last Part */}
      <View>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" size={30} color="blue" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>No Credit Card Fees</Text>
            <Text>
              Don't pay any credit card fees. Find great prices on our site
            </Text>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" size={30} color="blue" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Free Cancellation</Text>
            <Text>
              For most car rental bookings, there is no fee when you cancel
              before pickup
            </Text>
          </View>
        </View>

        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" size={30} color="blue" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Customer Support</Text>
            <Text>One-on-one support in languages</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CarRental;

const styles = StyleSheet.create({});
