import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const MessagesScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Notifications",
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
    <View style={{ flex: 1, width: "100%", backgroundColor: "#f0f0f0" }}>
      <Image
        source={require("../assets/person.jpg")}
        style={{ width: "100%", height: 250 }}
        resizeMode="center"
      />
      <Text style={{ alignSelf: "center", fontSize: 25 }}>
        No Notifications Yet
      </Text>
    </View>
  );
};

export default MessagesScreen;

const styles = StyleSheet.create({});
