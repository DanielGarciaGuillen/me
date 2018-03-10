import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

export default class Slide extends Component {
  render() {
    return (
      <View style={s.container}>
        <Text style={s.maintext}> Hey!</Text>
        <Text style={s.maintext}>Daniel here.</Text>
        <Image source={require("../assets/img/me.jpg")} style={s.image} />

        <Text style={s.maintext}> I am a Front-End Dev.</Text>
        <Text style={s.maintext}>
          {" "}
          I like to create beatiful design a performance optimize React/React
          Native apps.
        </Text>
        <Text style={s.maintext}>
          You can give me a call at{"\n"} 613-371-46-74
        </Text>
      </View>
    );
  }
}
