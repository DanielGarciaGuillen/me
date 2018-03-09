import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../../style");

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

export default class Slide11 extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}> If you need a Front End Developer</Text>

        <Text style={s.maintext}> Look no more.</Text>
        <Text style={s.maintext}>
          I rather be doing React and React Native development than anything
          else.
        </Text>
        <Text style={s.maintext}>
          Contact me now at daniel@danielgguillen.com!
        </Text>
      </View>
    );
  }
}
