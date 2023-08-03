import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const AccountScreen = () => {
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
        backgroundColor: "#ADD8E6",
        height: 35,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <ScrollView>
      <View style={{ paddingBottom: 20 }}>
        <View
          style={{
            height: 35,
            flexDirection: "row-reverse",
            backgroundColor: "#ADD8E6",
          }}
        >
          <Feather
            name="settings"
            size={24}
            color="black"
            style={{ left: 10, top: 10 }}
          />
        </View>

        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#ADD8E6",
              padding: 15,
            }}
          >
            <Image
              source={require("../assets/user.png")}
              style={{ width: 50, height: 50, left: 15, top: 3 }}
            />
            <View style={{ left: 25 }}>
              <Text style={{ fontSize: 20, fontWeight: "500" }}>
                Trip.com Member
              </Text>
              <Text>Edit Personal Information </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          padding: 5,
          height: 80,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            padding: 7,
          }}
        >
          <Entypo name="newsletter" size={24} color="blue" />
          <Entypo name="suitcase" size={24} color="blue" />
          <MaterialIcons name="message" size={24} color="blue" />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15 }}>All Bookings</Text>
          <Text style={{ fontSize: 15 }}>Upcoming</Text>
          <Text style={{ fontSize: 15 }}>Awaiting Review</Text>
        </View>
      </View>

      <View style={{ height: 15, color: "f0f0f0" }} />

      <View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="hearto"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Favorites</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="clockcircleo"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Recently Viewed</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <MaterialIcons
            name="confirmation-number"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Promo Codes</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="message1"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>My Posts</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="gift"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Gift Cards</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="creditcard"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>My Cards</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Ionicons
            name="person-outline"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Frequent Traveler Info</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <SimpleLineIcons
            name="plane"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>FlyerPlus</Text>
        </View>
      </View>

      <View style={{ height: 15, color: "f0f0f0" }} />

      <View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="customerservice"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Customer Support</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Ionicons
            name="information-circle-outline"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>About Trip.com</Text>
        </View>
      </View>

      <View style={{ height: 15, color: "f0f0f0" }} />

      <View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Feather
            name="award"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Trip.com Awards</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <AntDesign
            name="adduser"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Invite & Earn</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Ionicons
            name="star-outline"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Rate this App</Text>
        </View>
        <View
          style={{
            backgroundColor: "#fff",
            flexDirection: "row",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Entypo
            name="newsletter"
            size={24}
            color="black"
            style={{ left: 10, paddingRight: 20 }}
          />
          <Text style={{ fontSize: 18 }}>Terms & Conditions</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({});
