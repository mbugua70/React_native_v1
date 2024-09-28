import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (prop) => {
  const [inputValue, setInputValue] = useState("");

  const handleText = (enteredText) => {
    setInputValue(enteredText);
  };

  const addGoalHandler = () => {
    prop.onAddGoalItem(inputValue);
    setInputValue("");
  };

  return (
    // some props that modal has to set its visibility and animation are visible and animationType props among others
    <Modal visible={prop.showModal} animationType="slide">
      <View style={styles.inputContainer}>
        {/* the source prop is used to indicate the path of the image file */}
        {/* image component supports the style prop */}
        <Image
          source={require("../assets/images/goal.png")}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Enter your name"
          onChangeText={handleText}
          value={inputValue}
        />
        {/* button it's a component that does not have the style prop */}
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Add goal"
              onPress={addGoalHandler}
              color={"#b180f0"}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={prop.onCancel} color={"#f31282"} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    // marginBottom: 30,
    alignItems: "center",
    // borderBottomWidth: 2,
    // borderBottomColor: "#cccccc",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#12043",
    borderRadius: 6,
    width: "90%",
    // marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16,
  },
  button: {
    width: "32%",
    marginHorizontal: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
