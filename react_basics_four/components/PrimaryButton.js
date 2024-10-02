import { View, Text, Pressable } from "react-native";

const PrimaryButton = ({ children }) => {
  const handleClicked = () => {
    console.log("Clicked");
  };
  return (
    <View>
      <Pressable onPress={handleClicked}>
        <View>
          <Text>{children}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;
