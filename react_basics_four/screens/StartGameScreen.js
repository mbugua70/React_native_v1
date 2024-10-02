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
    // the property elevation is only for android (shadow)
    elevation: 4,
    borderRadius: 8,

    // the styling below are meant to be for ios(shadow)
    // shadowOpacity is how much or
    shadowOpacity: 0.25,
    shadowColor: "black",
    shadowOffset: { width: 4, height: 2 },
    // shadowRadius shows how much the shadow spread
    shadowRadius: 6,
  },
});
