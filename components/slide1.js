import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

export default class Slide1 extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}> Hey! Daniel Garcia here.</Text>
        <Image source={require("../assets/img/me.jpg")} style={s.image} />

        <Text style={s.maintext}> I enjoy doing Front-End Dev.</Text>
        <Text style={s.maintext}>
          {" "}
          I am specially interested in React and React Native.
        </Text>
        <Text style={s.maintext}>
          Feel free to contact me at daniel@danielgguillen.com
        </Text>
      </View>
    );
  }
}
