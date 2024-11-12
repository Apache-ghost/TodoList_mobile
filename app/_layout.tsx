import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button, Switch } from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

export default function App() {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [selectedTask, setSelectedTask] = useState<{
    id: string;
    text: string;
  } | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now().toString(), text }]);
  };

  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id: string, text: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { id, text } : task)));
    setSelectedTask(null);
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <View
      style={[
        styles.container,
        isDarkMode ? darkStyles.container : lightStyles.container,
      ]}
    >
      <View style={styles.headerContainer}>
        <Text
          style={[
            styles.header,
            isDarkMode ? darkStyles.text : lightStyles.text,
          ]}
        >
          To-Do List
        </Text>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            text={item.text}
            onDelete={() => deleteTask(item.id)}
            onEdit={() => setSelectedTask(item)}
            isDarkMode={isDarkMode}
          />
        )}
        keyExtractor={(item) => item.id}
      />

      <AddTask onSubmit={addTask} isDarkMode={isDarkMode} />

      {selectedTask && (
        <EditTask
          task={selectedTask}
          onSubmit={editTask}
          onCancel={() => setSelectedTask(null)}
          isDarkMode={isDarkMode}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: "#f8f9fa",
  },
  text: {
    color: "#000",
  },
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  text: {
    color: "#fff",
  },
});
