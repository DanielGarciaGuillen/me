import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("./style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

/* import * as firebase from "firebase"; */

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

/* var config = {
  apiKey: "AIzaSyCADTPWMNm49TMP_Ki-_Som7KvMEa8qbKY",
  authDomain: "hired-ce6d4.firebaseapp.com",
  databaseURL: "https://hired-ce6d4.firebaseio.com",
  projectId: "hired-ce6d4",
  storageBucket: "hired-ce6d4.appspot.com",
  messagingSenderId: "109733197181"
};

firebase.initializeApp(config); */

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
          index={1}
          showsButtons={true}
          nextButton={
            <View style={s.buttonNext}>
              <Text style={s.handleft}>👉</Text>
              <Text style={s.buttontext}>More Selly{"\n"}</Text>
            </View>
          }
          prevButton={
            <View style={s.buttonNext}>
              <Text style={s.handleft}>👈</Text>
              <Text style={s.buttontext}>Less Selly{"\n"}</Text>
            </View>
          }
          buttonWrapperStyle={{
            paddingTop: 535
          }}
        >
          {/*  SLIDE -1  */}
          <Slide0 />
          <Slide1 />
          <Slide2 />
          <Slide3 />
          <Slide4 />
          <Slide5 />
        </Swiper>
      </View>
    );
  }
}
