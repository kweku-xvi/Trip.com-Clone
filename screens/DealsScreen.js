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
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const DealsScreen = () => {
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
        backgroundColor: "#f0f0f0",
        height: 35,
        borderBottomColor: "transparent",
        shadowColor: "transparent",
      },
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          top: 7,
        }}
      >
        {/* Port Adventura */}
        <Pressable
          style={{
            padding: 21,
            borderColor: "blue",
            borderWidth: 1,
            height: 100,
            width: 90,
            alignItems: "center",
          }}
        >
          <Ionicons name="pricetag" size={24} color="blue" />
          <Text numberOfLines={2} style={{ color: "blue", top: 5 }}>
            PortAdventura World
          </Text>
        </Pressable>

        {/* Hotels */}
        <Pressable
          onPress={() => navigation.navigate("Hotels")}
          style={{
            padding: 21,
            borderColor: "blue",
            borderWidth: 1,
            height: 100,
            width: 90,
            alignItems: "center",
          }}
        >
          <FontAwesome name="building" size={24} color="blue" />
          <Text style={{ color: "blue", fontSize: 15, top: 15 }}>Hotels</Text>
        </Pressable>

        {/* Flights */}
        <Pressable
          onPress={() => navigation.navigate("Flights")}
          style={{
            padding: 21,
            borderColor: "blue",
            borderWidth: 1,
            height: 100,
            width: 90,
            alignItems: "center",
          }}
        >
          <FontAwesome5 name="plane-departure" size={24} color="blue" />
          <Text style={{ color: "blue", fontSize: 15, top: 15 }}>Flights</Text>
        </Pressable>

        {/* Trains */}
        <Pressable
          onPress={() => navigation.navigate("Trains")}
          style={{
            padding: 21,
            borderColor: "blue",
            borderWidth: 1,
            height: 100,
            width: 90,
            alignItems: "center",
          }}
        >
          <MaterialIcons name="train" size={24} color="blue" />
          <Text style={{ color: "blue", fontSize: 15, top: 15 }}>Trains</Text>
        </Pressable>
      </View>

      <View
        style={{ flex: 1, width: "100%", backgroundColor: "#ADD8E6", top: 15 }}
      >
        <Image
          source={require("../assets/promo.jpg")}
          style={{ flex: 1, width: "100%", height: 250 }}
          resizeMode="center"
        />
      </View>
      <View style={{ backgroundColor: "#ADD8E6", padding: 20 }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "orange", fontWeight: "700" }}>
            Trip.com is hugely excited to offer our luck winners an
          </Text>
          <Text style={{ color: "orange", fontWeight: "700" }}>
            incredible price...{" "}
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ top: 10, fontWeight: "800" }}>
            * First prize: 3 nights hotel (maximum 4 adults) with unlimited
            access to PortAventura Park and 1 day to
          </Text>
          <Text style={{ top: 5, fontWeight: "800" }}>Ferrari Land.</Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ top: 15, fontWeight: "800" }}>
            * Three runner up prizes: 4 one day tickets for
          </Text>
          <Text style={{ top: 10, fontWeight: "800" }}>
            PortAventura and Ferrari Land.
          </Text>
        </View>

        <View
          style={{ top: 20, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "500" }}>
            PortAdventura is one of Europe's best resorts, containing theme
            parks PortAdventura Park, Ferrari Land and Caribe Aquatic Park. It
            boasts six themed hotels, all of which are 4 or 5-star. Located one
            hour from Barcelona City Center and Barcelona Airport,
          </Text>
          <Text style={{ fontWeight: "500" }}>
            {" "}
            and is just 10 minutesfrom Reus Airport.
          </Text>
        </View>

        <View
          style={{ top: 30, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ fontWeight: "800" }}>
            Sounds good? Enter our competition for your chance
          </Text>
          <Text style={{ fontWeight: "800" }}> to win</Text>
        </View>

        <View
          style={{
            top: 30,
            justifyContent: "center",
            alignItems: "center",
            padding: 15,
          }}
        >
          <Text style={{ fontWeight: "800", color: "orange" }}>
            Enhance your PortAdventura World
          </Text>
          <Text style={{ fontWeight: "800", color: "orange" }}>experience</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DealsScreen;

const styles = StyleSheet.create({});
