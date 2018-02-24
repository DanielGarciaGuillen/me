import React, { Component } from "react";
import { Text, View, Dimensions, Image, StyleSheet } from "react-native";

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
  },
  maintext: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20,
    color: "white"
  },
  arrowleft: {
    marginLeft: 5,
    fontSize: 25
  },
  arrowright: {
    marginLeft: 90,
    fontSize: 25
  },
  wrapper: {}
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
          height={150}
          onMomentumScrollEnd={(e, state, context) =>
            console.log("index:", state.index)
          }
          dot={
            <View
              style={{
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
              paginationStyle={{
                marginTop: 500
              }}
            />
          }
        >
          {/*  SLIDE -1  */}
          <Slide0 />
          {/*  SLIDE 0 */}
          <Slide1 />
          {/*  SLIDE 1 */}

          {/*  SLIDE 2 */}

          {/*  SLIDE 3*/}
        </Swiper>
      </View>
    );
  }
}

{
  /* <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/me.jpg")}
            /> */
}
