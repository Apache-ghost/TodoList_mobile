import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../utils/theme";
//"../utils/theme";

interface TaskProps {
  text: string;
  theme: Theme;
}

const Task: React.FC<TaskProps> = ({ text, theme }) => {
  return (
    <View style={[styles.item, { backgroundColor: theme.itemBackground }]}>
      <View style={styles.itemLeft}>
        <View
          style={[styles.square, { backgroundColor: theme.squareColor }]}
        ></View>
        <Text style={[styles.itemText, { color: theme.text }]}>{text}</Text>
      </View>
      <View
        style={[styles.circular, { borderColor: theme.squareColor }]}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    opacity: 0.6,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
  circular: {
    width: 12,
    height: 12,
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default Task;
