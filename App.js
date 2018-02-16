import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");
const styles = {
  container: {
    flex: 1
  },

  wrapper: {},

  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent"
  },

  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB"
  },

  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F9FBFB"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E6EB"
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center"
  },

  image: {
    width,
    flex: 1
  }
};

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
          height={200}
          horizontal={false}
          showsPagination={false}
        >
          <View style={styles.slide1}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/top/top.png")}
            />
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper>

        <Swiper
          style={styles.wrapper}
          showsButtons={true}
          showsPagination={false}
          height={240}
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
                marginTop: 100
              }}
            />
          }
        >
          {/*  SLIDE 0 */}
          <View style={styles.slide}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/me.jpg")}
            />
          </View>
          {/*  SLIDE 1 */}
          <View style={styles.slide1}>
            <Text> Slide 1 </Text>
          </View>
          {/*  SLIDE 2 */}
          <View style={styles.slide2}>
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/bottom/bottom.png")}
            />
          </View>

          {/*  SLIDE 3*/}
          <View style={styles.slide3}>
            <Text> Slide 3 </Text>
          </View>
        </Swiper>
      </View>
    );
  }
}
