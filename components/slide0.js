import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

const styles = StyleSheet.create({});

export default class Slide0 extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}> Hola!</Text>

        <Text style={s.maintext}> I'm Daniel.</Text>
        <Text style={s.maintext}> I create websites & apps.</Text>
      </View>
    );
  }
}
