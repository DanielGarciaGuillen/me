import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("../../style");

import Swiper from "react-native-swiper";

const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

export default class Slide12 extends Component {
  constructor(props) {
    super(props);

    this.state = { timer: 0, color: "#FF0000" };
    setInterval(() => {
      this.setState({
        timer: this.state.timer + 1,
        color: this.state.timer % 2 == 0 ? "#FF0000" : "#0000FF"
      });
    }, 1000);
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.color,
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
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
