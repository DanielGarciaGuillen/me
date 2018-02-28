import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");
var s = require("../style");

import { Icon } from "react-native-elements";

const styles = StyleSheet.create({});

export default class Slide2 extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}> If you are looking for a</Text>
        <Text style={s.maintext}> React Developer.</Text>
        <Text style={s.maintext}>I am looking to hustle.</Text>

        <Text style={s.maintext}> I may not know everything.</Text>
        <Text style={s.maintext}>
          {" "}
          But I have all the skills to figure out.
        </Text>
        <Text style={s.maintext}> I am...</Text>
        <Text style={s.h1}>Relentlessly resourceful.</Text>
      </View>
    );
  }
}
