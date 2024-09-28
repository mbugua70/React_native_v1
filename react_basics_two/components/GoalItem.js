import { View, Text, StyleSheet, Pressable } from "react-native";

const GoalItem = (prop) => {
  const deleteGoalItem = () => {
    prop.onDeleteItem(prop.id);
  };
  return (
    // for ios styling of borderRadius we will have to style the view component instead of Text compenent.
    // To let or change or make an item pressable in react native , you will wrap an item with a pressable component to
    // react native know that the item is pressable.
    <View style={styles.itemContainer}>
      {/* to add ripple effect in android phone we will add it in the pressable component */}
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        // to set pressing in ios we will use style functionality like shown below
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={deleteGoalItem}
      >
        <Text style={styles.itemContainerText}>{prop.item}</Text>
      </Pressable>
    </View>
  );
};

// styling

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#5e0acc",
    borderRadius: 12,
    marginTop: 12,
  },
  itemContainerText: {
    color: "#fff",
    padding: 8,
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
