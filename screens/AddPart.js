import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Input from "../components/Input";

export default function AddPart() {
  const [name, onChangeName] = useState("");
  const [material, onChangeMaterial] = useState("");
  const [dimensions, onChangeDimensions] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View>
          <Input onChangeText={onChangeName} text={name} label={"Nazwa"} />
          <Input
            onChangeText={onChangeMaterial}
            text={material}
            label={"Materiał"}
          />
          <Input
            onChangeText={onChangeDimensions}
            text={dimensions}
            label={"Wymiary"}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
