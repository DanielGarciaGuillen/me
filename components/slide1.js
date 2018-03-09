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
        <Text style={s.maintext}> Hello!</Text>
        <Text style={s.maintext}>Daniel Garcia here.</Text>
        <Image source={require("../assets/img/me.jpg")} style={s.image} />

        <Text style={s.maintext}> I am a Front-End Dev.</Text>
        <Text style={s.maintext}>
          {" "}
          I like to create beatiful design a performance optimize React/React
          Native apps.
        </Text>
        <Text style={s.maintext}>Contact me at daniel@danielgguillen.com</Text>
      </View>
    );
  }
}
