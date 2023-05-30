import React from "react";
import { View, StyleSheet, Text } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Button = () => {
  const menulist = [
    { id: 1, name: "Cafe", icon: "store" },
    { id: 2, name: "Homestay", icon: "home" },
    { id: 3, name: "Camping", icon: "campground" },
    { id: 4, name: "Photo Spot", icon: "camera" },
  ];

  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {menulist.map((v, index) => (
          <MenuItem item={v} key={index} />
        ))}
      </View>
    </View>
  );
};

const MenuItem = ({ item }) => {
  return (
    <View style={styles.btn_item}>
      <View style={styles.btn_item}>
        <FontAwesome5 name={item.icon} size={35} color={"green"} />
      </View>
      <Text styles={styles.btn_text}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn_item: {
    width: 100,
    marginHorizontal: 5,
    marginVertical: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btn_icon: { marginBottom: 10 },
  btn_text: { color: "black", fontSize: 14 },
});

export default Button;
