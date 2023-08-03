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
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";

const CoachesScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Coaches",
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
    <ScrollView style={{ backgroundColor: "#f0f0f0" }}>
      <View style={{ margin: 20, backgroundColor: "white", borderRadius: 15 }}>
        {/* Destinations */}
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
            placeholder={"Manchester Piccadily"}
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

        {/* Time */}
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
          <TextInput placeholderTextColor="black" placeholder={"Enter time"} />
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
        }}
      >
        <Text style={{ fontSize: 23 }}>My Bookings</Text>
      </Pressable>

      {/* Official Partnership */}
      <View style={{ padding: 20 }}>
        <Text style={{ top: 10, fontSize: 18, fontWeight: "400" }}>
          Official Partnership
        </Text>
        <Text style={{ top: 10, fontSize: 15, color: "#003580" }}>
          megabus.com
        </Text>
        <Text style={{ top: 8, fontSize: 15, color: "red" }}>
          national express
        </Text>
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
          <AntDesign name="star" size={30} color="orange" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Official Partnerships</Text>
            <Text>A platform you can trust</Text>
          </View>
        </View>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" size={30} color="green" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Multiple currencies accepted</Text>
            <Text>
              Payments are secured using the latest industry standards
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
          <MaterialCommunityIcons
            name="heart-multiple"
            size={30}
            color="orange"
          />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>E-Tickets Available</Text>
            <Text>Save time and skip the lines</Text>
          </View>
        </View>

        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-pricetags-sharp" size={30} color="green" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>No Credit Card Fees</Text>
            <Text>Convenient payment options available</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default CoachesScreen;

const styles = StyleSheet.create({});
