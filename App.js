import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("./style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

import { Icon } from "react-native-elements";

import Slide0 from "./components/slide0";
import Slide1 from "./components/slide1";
import Slide2 from "./components/slide2";
import Slide3 from "./components/slide3";
import Slide4 from "./components/slide4";
import Slide5 from "./components/slide5";

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default class App extends Component {
  state = {
    fontLoaded: false
  };
  async componentDidMount() {
    await Font.loadAsync({
      Arial: require("./assets/fonts/arial.ttf")
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    if (!this.state.fontLoaded) return null;

    return (
      <View style={styles.container}>
        <Swiper
          style={styles.wrapper}
          showsPagination={false}
          onMomentumScrollEnd={(e, state, context) =>
            console.log("index:", state.index)
          }
          loop={false}
          showsButtons={true}
          nextButton={
            <Text style={s.moreselly}>
              More Selly{"\n"}
              <Text style={s.handleft}>👉</Text>
            </Text>
          }
          prevButton={<Text style={s.lessselly}>Less Selly{"\n"}👈</Text>}
          buttonWrapperStyle={{
            paddingTop: 535,
            flex: 1
          }}
        >
          {/*  SLIDE -1  */}
          <Slide0 />
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
        </Swiper>
      </View>
    );
  }
}
