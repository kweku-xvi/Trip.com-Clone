import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
  Alert,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { AntDesign } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";

const AttractionsScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Attractions & Tours ",
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
    <ScrollView style={{ backgroundColor: "white" }}>
      {/* Local Experiences */}
      <View
        style={{
          backgroundColor: "#f0f0f0",
          top: 15,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, padding: 5 }}>Local Experiences</Text>
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
          {/* Last Image */}
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
            <Text style={{ padding: 5 }}>Discounted Hotels in Accra</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Unique Experiences */}
      <View
        style={{
          backgroundColor: "#f0f0f0",
          top: 40,
          padding: 15,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontSize: 20, padding: 5 }}>Unique Experiences</Text>
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
            <Text style={{ padding: 5 }}>Discounted Hotels in Accra</Text>
          </Pressable>
        </ScrollView>
      </View>

      {/* Why book with us */}
      <View style={{ padding: 20 }}>
        <Text style={{ top: 30, fontSize: 18, fontWeight: "400" }}>
          Why book with us?
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

export default AttractionsScreen;

const styles = StyleSheet.create({});
