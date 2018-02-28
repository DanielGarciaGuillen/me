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
      <View style={styles.container}>
        <Text style={styles.maintext}>
          {" "}
          If you are looking for a React Developer.
        </Text>
        <Text style={styles.maintext}>I am looking to hustle.</Text>

        <Text style={styles.maintext}> I may not know everything.</Text>
        <Text style={styles.maintext}>
          {" "}
          But I have all the skills to figure out.
        </Text>
        <Text style={styles.maintext}> I am...</Text>
        <Text style={styles.h1}>Relentlessly resourceful.</Text>
      </View>
    );
  }
}
