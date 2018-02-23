import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

const styles = StyleSheet.create({
  maintext: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20,
    color: "white"
  }
});

export default class Slide0 extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <View
          style={{
            width: 300,
            height: 500,
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text style={styles.maintext}> Hola!</Text>

          <Text style={styles.maintext}> I'm Daniel.</Text>
          <Text style={styles.maintext}> I create websites & apps.</Text>
        </View>
      </View>
    );
  }
}
