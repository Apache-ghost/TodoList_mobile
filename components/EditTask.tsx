import React, { useState } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

type EditTaskProps = {
  task: { id: string; text: string };
  onSubmit: (id: string, text: string) => void;
  onCancel: () => void;
};

const EditTask: React.FC<EditTaskProps> = ({ task, onSubmit, onCancel }) => {
  const [text, setText] = useState(task.text);

  const handleSave = () => {
    onSubmit(task.id, text);
  };

  return (
    <Modal transparent animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput style={styles.input} value={text} onChangeText={setText} />
          <View style={styles.buttons}>
            <Button title="Save" onPress={handleSave} />
            <Button title="Cancel" onPress={onCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default EditTask;
