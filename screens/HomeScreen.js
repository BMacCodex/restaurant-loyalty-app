import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Loyalty Points</Text>
      <Text style={styles.points}>You have 0 points</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Scanner")}
      >
        <Text style={styles.buttonText}>Scan Receipt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  points: {
    fontSize: 18,
    marginTop: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#ff6347",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
