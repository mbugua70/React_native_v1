import React from "react";
import { Text, View } from "react-native";

// Notes //

/*

-- Every views in react native uses flex out of the box


*/

export default function App() {
  return (
    <View
      style={{
        padding: 50,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
        width: "100%",
        height: 300,
      }}
    >
      <View
        style={{
          backgroundColor: "red",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: "blue",
          //   width: 100,
          //   height: 100,
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: "green",
          //   width: 100,
          //   height: 100,
          flex: 3,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
