import { View, Text, TextInput, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={Styles.inputContainer}>
      <TextInput keyboardType="numeric" />
      <View>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const Styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    marginTop: 100,
    padding: 18,
    backgroundColor: "#72063c",
    marginHorizontal: 20,
    elevation: 4,
    borderRadius: 8,

    // the styling below are meant to be for ios(shadow)
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: "",
  },
});
