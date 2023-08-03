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
import { Entypo } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";
import { FontAwesome } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const AirportTransfersScreen = () => {
  const navigation = useNavigation();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Airport Transfers",
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

  return (
    <ScrollView style={{ backgroundColor: "#f0f0f0" }}>
      <View style={{ margin: 20, backgroundColor: "white", borderRadius: 15 }}>
        {/* Arrival */}
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
          <Ionicons name="airplane-outline" size={24} color="black" />
          <TextInput
            placeholderTextColor="black"
            placeholder={"Arrival Airport"}
          />
        </Pressable>

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
          <EvilIcons name="location" size={24} color="black" />
          <TextInput
            placeholderTextColor="black"
            placeholder={"Enter a destination"}
          />
        </Pressable>

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
          <Entypo name="clock" size={24} color="black" />
          <TextInput
            placeholderTextColor="black"
            placeholder={"Enter time of arrival"}
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

      {/* Picking number of rooms & people */}
      <BottomModal
        swipeThreshold={200}
        onBackdropPress={() => setModalVisibile(!modalVisibile)}
        swipeDirection={["up", "down"]}
        footer={
          <ModalFooter>
            <ModalButton
              text="Apply"
              style={{
                marginBottom: 20,
                color: "white",
                backgroundColor: "blue",
              }}
              onPress={() => setModalVisibile(!modalVisibile)}
            />
          </ModalFooter>
        }
        modalTitle={<ModalTitle title="Select rooms and guests" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        onHardwareBackPress={() => setModalVisibile(!modalVisibile)}
        visible={modalVisibile}
        onTouchOutside={() => setModalVisibile(!modalVisibile)}
      >
        <ModalContent style={{ width: "100%", height: 310 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Rooms</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setRooms(Math.max(1, rooms - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {rooms}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setRooms((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Adults</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setAdults(Math.max(1, adults - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {adults}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setAdults((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 15,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "500" }}>Children</Text>
            <Pressable
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <Pressable
                onPress={() => setChildren(Math.max(0, children - 1))}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  -
                </Text>
              </Pressable>

              <Pressable>
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 18,
                    fontWeight: "500",
                    paddingHorizontal: 6,
                  }}
                >
                  {children}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => setChildren((c) => c + 1)}
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  borderColor: "#BEBEBE",
                  backgroundColor: "#E0E0E0",
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    fontWeight: "600",
                    paddingHorizontal: 6,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        </ModalContent>
      </BottomModal>

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

      {/* Why book with us */}
      <View style={{ padding: 20 }}>
        <Text style={{ top: 10, fontSize: 18, fontWeight: "400" }}>
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
            <Text style={{ fontSize: 18 }}>Book at a Flat Rate</Text>
            <Text>No extra charges during your journey</Text>
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
            <Text style={{ fontSize: 18 }}>Pick-up for Delayed Flights</Text>
            <Text>
              The driver will pick you up on time even if your flight arrives
              late
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
            <Text style={{ fontSize: 18 }}>Customer Support</Text>
            <Text>
              Help is available in multiple languages to ensure your itinerary
              goes smoothly
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
          <Ionicons name="ios-pricetags-sharp" size={30} color="green" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>
              Compensation for Late Services/No Service
            </Text>
            <Text>
              Easily request compensation if your driver is slow or doesn't show
              up
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default AirportTransfersScreen;

const styles = StyleSheet.create({});
