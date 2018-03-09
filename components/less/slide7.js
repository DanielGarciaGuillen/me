import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../../style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

const styles = StyleSheet.create({});

export default class Slide9 extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}>
          If you need a Front End Developer,{"\n"}
          you could try to contact me.{"\n"} It’s up to you.
        </Text>
      </View>
    );
  }
}
