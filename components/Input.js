import React from "react";
import { View, StyleSheet } from "react-native";
import { FloatingLabelInput } from "react-native-floating-label-input";

export default function Input({ text, onChangeText, label }) {
  return (
    <View style={styles.input}>
      <FloatingLabelInput
        label={label}
        value={text}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 20,
  },
});
