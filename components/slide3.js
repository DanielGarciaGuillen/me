import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

const styles = StyleSheet.create({});

export default class Slide3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.maintext}> Hey! Daniel Garcia here.</Text>
        <Image
          source={require("../assets/img/me.jpg")}
          style={{
            width: 100,
            height: 100,
            borderRadius: 100,
            borderColor: "pink",
            borderWidth: 2
          }}
        />

        <Text style={styles.maintext}> I enjoy doing Front-End Dev.</Text>
        <Text style={styles.maintext}>
          {" "}
          I am specially interested in React and React Native.
        </Text>
        <Text style={styles.maintext}>
          Feel free to contact me at daniel@danielgguillen.com
        </Text>
      </View>
    );
  }
}
