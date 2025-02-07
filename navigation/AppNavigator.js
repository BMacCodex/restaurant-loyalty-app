import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import ReserveTableScreen from "../screens/ReserveTableScreen"; // Import

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ReserveTable" component={ReserveTableScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
