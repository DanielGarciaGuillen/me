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
        <Text style={styles.maintext}> If you need a Front End Developer</Text>


        <Text style={styles.maintext}> Look no more</Text>
        <Text style={styles.maintext}>
          I rather be doing React and React Native development than anything else.
        </Text>
        <Text style={styles.maintext}>
          Contact me now at daniel@danielgguillen.com!
        </Text>
      </View>
    );
  }
}
