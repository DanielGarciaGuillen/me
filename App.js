import React, { Component } from "react";
import { Text, View, Dimensions, Image } from "react-native";
import Swiper from "react-native-swiper";
import { Font } from "expo";
const { width } = Dimensions.get("window");
const styles = {
  container: {
    flex: 1,
    backgroundColor: "yellow"
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
    backgroundColor: "#97CAE5"
  },

  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9"
  },

  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold"
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
        {/* <Swiper style={styles.wrapper} height={200} horizontal={false} autoplay>
          <View style={styles.slide1}>
            <Text style={styles.text}>Hello Swiper</Text>
          </View>
          <View style={styles.slide2}>
            <Text style={styles.text}>Beautiful</Text>
          </View>
          <View style={styles.slide3}>
            <Text style={styles.text}>And simple</Text>
          </View>
        </Swiper> */}

        <Swiper
          style={styles.wrapper}
          horizontal={false}
          showsButtons={true}
          showsPagination={false}
          autoplay={true}
          onMomentumScrollEnd={(e, state, context) =>
            console.log("index:", state.index)
          }
          dot={
            <View
              style={{
                backgroundColor: "rgba(0,0,0,.2)",
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
        >
          {/*  SLIDE 0 */}
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Aussie tourist dies at Bali hotel</Text>
            }
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/me.jpg")}
            />
          </View>
          {/*  SLIDE 1 */}
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Big lie behind Nine’s new show</Text>
            }
          />
          {/*  SLIDE 2*/}
          <View
            style={styles.slide}
            title={<Text numberOfLines={1}>Why Stone split from Garfield</Text>}
          >
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/dog.png")}
            />
          </View>
          {/*  SLIDE 3*/}
          <View
            style={styles.slide}
            title={
              <Text numberOfLines={1}>Learn from Kim K to land that job</Text>
            }
          >
            {" "}
            <Image
              resizeMode="stretch"
              style={styles.image}
              source={require("./assets/img/dogg.png")}
            />
          </View>
        </Swiper>
      </View>
    );
  }
}
