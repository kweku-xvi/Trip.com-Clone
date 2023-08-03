import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { Feather } from "@expo/vector-icons";
import { ModalContent } from "react-native-modals";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Image } from "react-native";
import { Picker } from "@react-native-picker/picker";

const BookingScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const roomOptions = [
    { label: "Deluxe Room", value: "Deluxe Room" },
    { label: "Suite with Ocean View", value: "Suite with Ocean View" },
    { label: "Family Suite", value: "Family Suite" },
  ];

  const handleRoomSelect = (itemValue) => {
    setSelectedRoom(itemValue);
    setIsModalVisible(false);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Booking Screen",
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
        {/* Select Room Type */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            paddingHorizontal: 10,
            borderWidth: 0,
            paddingVertical: 15,
          }}
        >
          <AntDesign name="carryout" size={24} color="black" />
          <Pressable onPress={() => setIsModalVisible(true)}>
            <Text>Select a room type:</Text>
          </Pressable>
          <Modal visible={isModalVisible} animationType="slide">
            <View style={styles.modalContainer}>
              {roomOptions.map((option) => (
                <Pressable
                  key={option.value}
                  style={styles.optionItem}
                  onPress={() => handleRoomSelect(option.value)}
                >
                  <Text>{option.label}</Text>
                </Pressable>
              ))}
            </View>
          </Modal>
          {selectedRoom && <Text>{selectedRoom}</Text>}
        </View>

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
          <Feather name="calendar" size={24} color="black" />
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

        {/* Rooms and Guests */}
        <Pressable
          onPress={() => setModalVisibile(!modalVisibile)}
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
          <Ionicons name="person-outline" size={24} color="black" />
          <TextInput
            placeholderTextColor="red"
            placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
          />
        </Pressable>

        {/* Book Button */}
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
            Book
          </Text>
        </Pressable>
      </View>

      {/* Macoba */}
      <View
        style={{
          gap: 10,
          paddingHorizontal: 10,
          borderWidth: 0,
          paddingVertical: 15,
          backgroundColor: "white",
          width: 350,
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 15,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/hotel-jpg.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
          </Pressable>
          <View style={{ padding: 5, left: 10 }}>
            <Text style={{ fontSize: 20 }}>Macoba Luxury</Text>
            <Text style={{ fontSize: 20 }}> Apartments</Text>
            <Text
              style={{
                backgroundColor: "#003580",
                width: 50,
                color: "white",
                padding: 5,
                borderRadius: 15,
                top: 10,
              }}
            >
              4.3/5
            </Text>
            <Text style={{ top: 15, color: "black", fontWeight: "500" }}>
              5 reviews
            </Text>
          </View>
        </View>
      </View>

      {/* Grand Star */}
      <View
        style={{
          paddingHorizontal: 10,
          borderWidth: 0,
          paddingVertical: 15,
          backgroundColor: "white",
          width: 350,
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 15,
          top: 20,
          padding: 30,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => navigation.navigate("Booking")}
            style={{
              width: 150,
              height: 150,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/bed.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
          </Pressable>
          <View style={{ padding: 5, left: 10 }}>
            <Text style={{ fontSize: 20 }}>Grand Star Hotel</Text>
            <Text
              style={{
                backgroundColor: "#003580",
                width: 50,
                color: "white",
                padding: 5,
                borderRadius: 15,
                top: 10,
              }}
            >
              3.8/5
            </Text>
            <Text style={{ top: 15, color: "black", fontWeight: "500" }}>
              10 reviews
            </Text>
          </View>
        </View>
      </View>

      {/* Asantewaa */}
      <View
        style={{
          paddingHorizontal: 10,
          borderWidth: 0,
          paddingVertical: 15,
          backgroundColor: "white",
          width: 350,
          justifyContent: "center",
          alignSelf: "center",
          borderRadius: 15,
          top: 40,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              width: 150,
              height: 150,
              backgroundColor: "white",
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../assets/hotel-jpg.jpg")}
              style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
              resizeMode="center"
            />
          </Pressable>
          <View style={{ padding: 5, left: 10 }}>
            <Text style={{ fontSize: 20 }}>Asantewaa Premier</Text>
            <Text style={{ fontSize: 20 }}> Hotel</Text>
            <Text
              style={{
                backgroundColor: "#003580",
                width: 50,
                color: "white",
                padding: 5,
                borderRadius: 15,
                top: 10,
              }}
            >
              4.3/5
            </Text>
            <Text style={{ top: 15, color: "black", fontWeight: "500" }}>
              8 reviews
            </Text>
          </View>
        </View>
      </View>

      {/* Why book with us */}
      <View style={{ padding: 20 }}>
        <Text style={{ top: 25, fontSize: 18, fontWeight: "400" }}>
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

export default BookingScreen;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  optionItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
});
