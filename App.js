import React from "react";
import { StyleSheet, KeyboardAvoidingView } from "react-native";
import { Provider } from "react-redux";
import { store } from "./store";
import HomeScreen from "./screens/HomeScreen";
import EatsScreen from "./screens/EatsScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MapScreen from "./screens/MapScreen";

export default function App() {
  const RootStack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          >
            <RootStack.Navigator>
              <RootStack.Group>
                <RootStack.Screen
                  name="Home"
                  component={HomeScreen}
                  options={{ title: "Overview" }}
                />
                <RootStack.Screen
                  name="MapScreen"
                  component={MapScreen}
                  options={{ headerShown: false }}
                />
                <RootStack.Screen
                  name="EatsScreen"
                  component={EatsScreen}
                  options={{ headerShown: false }}
                />
              </RootStack.Group>
            </RootStack.Navigator>
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
