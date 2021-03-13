import React from "react";
import { View } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

export default function Input({ text, onChangeText, label }) {
  return (
    <View>
      <FloatingLabelInput
        label={label}
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
}
