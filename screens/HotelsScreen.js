import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  Image,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import DatePicker from "react-native-date-ranges";
import { BottomModal } from "react-native-modals";
import { ModalFooter } from "react-native-modals";
import { ModalButton } from "react-native-modals";
import { ModalTitle } from "react-native-modals";
import { SlideAnimation } from "react-native-modals";
import { ModalContent } from "react-native-modals";

const HotelsScreen = () => {
  const [selectedDates, setSelectedDates] = useState();
  const navigation = useNavigation();
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [modalVisibile, setModalVisibile] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Hotels",
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
    <>
      <ScrollView style={{ backgroundColor: "#f0f0f0" }}>
        <View
          style={{ margin: 20, backgroundColor: "white", borderRadius: 15 }}
        >
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
            <Feather name="search" size={24} color="black" />
            <TextInput
              placeholderTextColor="black"
              placeholder={"Enter Your Destination"}
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

          {/* We Price Match */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              top: 5,
              padding: 10,
            }}
          >
            <Text>We Price Match</Text>
          </View>
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

        {/* Saved | Viewed */}
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
          <Text style={{ fontSize: 20, fontWeight: "500" }}>
            Saved | Viewed
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Pressable
              style={{
                width: 150,
                height: 150,
                marginTop: 10,
                backgroundColor: "white",
                borderRadius: 10,
                marginHorizontal: 5,
              }}
            >
              <Image
                source={require("../assets/hotel-jpg.jpg")}
                style={{ flex: 1, width: "100%", height: 250, borderRadius: 5 }}
                resizeMode="center"
              />
            </Pressable>
            <View style={{ padding: 5 }}>
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

        <View
          style={{
            gap: 10,
            borderWidth: 0,
            backgroundColor: "white",
            width: 350,
            alignSelf: "center",
            borderRadius: 15,
            top: 20,
            flexDirection: "row",
            alignItems: "center",
            padding: 30,
          }}
        >
          <View>
            <Ionicons name="pricetags" size={40} color="pink" />
          </View>
          <View style={{ left: 15 }}>
            <Text style={{ fontSize: 23 }}>Hotel Discounts</Text>
            <Text>Check exclusive offers on hotel!</Text>
            <Text>Save up to 50%</Text>
          </View>
        </View>

        {/* My Bookings */}
        <View
          style={{
            gap: 10,
            borderWidth: 0,
            backgroundColor: "white",
            width: 350,
            alignSelf: "center",
            borderRadius: 15,
            top: 40,
            flexDirection: "row",
            padding: 20,
          }}
        >
          <Text style={{ fontSize: 23 }}>My Bookings</Text>
        </View>

        <View
          style={{
            gap: 10,
            backgroundColor: "#f0f0f0",
            top: 40,
            padding: 40,
            alignSelf: "center",
          }}
        >
          <Text style={{ fontSize: 20, bottom: 20 }}>Book With Trip.com</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default HotelsScreen;

const styles = StyleSheet.create({});
