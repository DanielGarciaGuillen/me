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
        <Text style={s.maintext}> Hey!{"\n"} I'm Daniel.</Text>

        <Text style={s.maintext}>I do Front-End.</Text>
        <Text style={s.maintext}>I enjoy doing {"\n"}Websites & Apps.</Text>
        <Text style={s.maintext}>Do you want to talk?</Text>
      </View>
    );
  }
}
