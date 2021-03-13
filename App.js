import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Input from "./components/Input";

export default function App() {
  const [name, onChangeName] = useState("");
  const [material, onChangeMaterial] = useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Input onChangeText={onChangeName} text={name} label={"Nazwa"} />
        <Input
          onChangeText={onChangeMaterial}
          text={material}
          label={"Materiał"}
        />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
});
