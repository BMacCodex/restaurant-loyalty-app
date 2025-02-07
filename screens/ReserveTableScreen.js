import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const ReserveTableScreen = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState("");

  const handleReserve = () => {
    alert(`Table reserved for ${name}, ${people} people!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reserve a Table</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Number of People"
        keyboardType="numeric"
        value={people}
        onChangeText={setPeople}
      />
      <Button title="Reserve" onPress={handleReserve} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default ReserveTableScreen;
