// import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
// import { useFonts } from 'expo-font';
// import { Stack } from 'expo-router';
// import * as SplashScreen from 'expo-splash-screen';
// import { useEffect } from 'react';
// import 'react-native-reanimated';

// import { useColorScheme } from '@/hooks/useColorScheme';

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
//   });

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
//       <Stack>
//         <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//       </Stack>
//     </ThemeProvider>
//   );
// }

import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Button } from "react-native";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";

export default function App() {
  const [tasks, setTasks] = useState<{ id: string; text: string }[]>([]);
  const [selectedTask, setSelectedTask] = useState<{
    id: string;
    text: string;
  } | null>(null);

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

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <Task
            text={item.text}
            onDelete={() => deleteTask(item.id)}
            onEdit={() => setSelectedTask(item)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
      <AddTask onSubmit={addTask} />
      {selectedTask && (
        <EditTask
          task={selectedTask}
          onSubmit={editTask}
          onCancel={() => setSelectedTask(null)}
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
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
});
