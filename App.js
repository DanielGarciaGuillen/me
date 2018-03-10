import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";
var s = require("./style");

import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");

/* import * as firebase from "firebase"; */

import { Icon } from "react-native-elements";

import Slide6 from "./components/less/slide6";
import Slide7 from "./components/less/slide7";
import Slide8 from "./components/less/slide8";
import Slide9 from "./components/less/slide9";
import Slide from "./components/slide";
import Slide10 from "./components/more/slide10";
import Slide11 from "./components/more/slide11";
import Slide12 from "./components/more/slide12";
import Slide13 from "./components/more/slide13";

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
          index={4}
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
          <Slide6 />
          <Slide7 />
          <Slide8 />
          <Slide9 />
          <Slide />
          <Slide10 />
          <Slide11 />
          <Slide12 />
          <Slide13 />
        </Swiper>
      </View>
    );
  }
}
