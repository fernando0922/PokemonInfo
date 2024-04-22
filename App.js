import { NavigationContainer } from "@react-navigation/native";
import Home from "./screen/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import List from "./screen/List";
import Details from "./screen/Details";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{
          statusBarColor: "#31363F",
          statusBarStyle: "light",
          headerStyle: {
            backgroundColor: "#31363F",
          },
          headerTintColor: "gold", //all text color
          contentStyle: {
            backgroundColor: "#31363F",
          },
          headerTitleStyle: {
            fontWeight: "900",
            fontSize: 24,
          },
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "🌍 of POKÉMONS",
          }}
        />
        <Stack.Screen name="list" component={List} />
        <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
