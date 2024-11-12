import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type TaskProps = {
  text: string;
  onDelete: () => void;
  onEdit: () => void;
};

const Task: React.FC<TaskProps> = ({ text, onDelete, onEdit }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{text}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={onEdit} style={styles.editButton}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    borderColor: "#ddd",
    borderWidth: 1,
  },
  itemText: {
    flex: 1,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#55BCF6",
    borderRadius: 5,
  },
  deleteButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FF6347",
    borderRadius: 5,
  },
});

export default Task;
