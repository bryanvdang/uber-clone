import { StyleSheet, Image, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import React from "react";

const HomeScreen = () => {
  return (
    //background white, full-height
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
