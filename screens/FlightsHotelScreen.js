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
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const FlightsHotelScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Flights + Hotels",
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
          {/* <Ionicons name="person-outline" size={24} color="black" /> */}
          <TextInput
            placeholderTextColor="red"
            placeholder={` ${rooms} room • ${adults} adults • ${children} Children`}
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

      {/* Last Part */}
      <View>
        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Ionicons name="ios-pricetags-sharp" size={30} color="orange" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Bundle & Save</Text>
            <Text>Better deal than booking separately</Text>
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
            color="green"
          />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Worry-free Booking</Text>
            <Text>All your bookings in one place</Text>
          </View>
        </View>

        <View
          style={{
            margin: 20,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <AntDesign name="checkcircle" size={30} color="orange" />
          <View style={{ left: 10 }}>
            <Text style={{ fontSize: 18 }}>Flight + Hotel Guarantee</Text>
            <Text>
              Your hotel booking is guaranteed if the airline changes your
              flight
            </Text>
          </View>
        </View>
      </View>

      {/* ATOL Information */}
      <View style={{ margin: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          ATOL Information
        </Text>
        <Text style={{ fontSize: 15 }}>
          Some of the flights and flight-inclusive holidays on this website are
          financially protected by ATOL scheme (under Trip.com Travel Singapore
          Pte. Ltd's ATOL number 11572). But ATOL protection does not apply to
          all holiday and travel services listed on this website. This website
          will provide you with information on the protection that applies in
          the case of each holiday and travel service offered before you can
          make your booking. If you do not receive an ATOL Certificate then your
          booking will not be ATOL protected. If you receive an ATOL Certificate
          but all the parts of your trip are not listed on it, those parts will
          not be ATOL protected. Please see our booking conditions for
          information, or for more information about financial protection and
          the ATOL Certificate go to: www.caa.co.uk.
        </Text>
      </View>
    </ScrollView>
  );
};

export default FlightsHotelScreen;

const styles = StyleSheet.create({});
