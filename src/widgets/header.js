import { View, Text, Image } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import React from "react";
import { StatusBar } from "react-native";

const Header = () => {
  return (
    <View
      style={{
        flex: 2,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <StatusBar hidden={true}/>
      <View style={{ flexDirection: "row" }}>
       <Text style={{ fontSize: 30, color: "green", fontWeight:"bold"}}>
        AGROWITA {'\n'}
        <Text>
        Wisata & Edukasi
       </Text>
       </Text>
      </View>
    </View>
  );
};

export default Header;