import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function ListParts({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Dodaj część")}
      >
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    position: "absolute",
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    backgroundColor: "#ee6e73",
    right: 30,
    bottom: 30,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
