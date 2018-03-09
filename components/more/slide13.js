import React from "react";
import { Animated, Text, View, Image } from "react-native";
var s = require("../../style");

class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0), // Initial value for opacity: 0
    changeSize: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.loop(
      Animated.timing(
        // Animate over time
        this.state.fadeAnim, // The animated value to drive
        {
          toValue: 1, // Animate to opacity: 1 (opaque)
          duration: 10000 // Make it take a while
        },
        this.state.changeSize, // The animated value to drive
        {
          toValue: 100, // Animate to opacity: 1 (opaque)
          duration: 10000 // Make it take a while
        }
      )
    ).start(); // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          transform: [
            {
              translateY: this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [1200, -1200]
              })
            }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class Slide13 extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FadeInView>
          <Image source={require("../../assets/img/FH.png")} style={s.rocket} />
        </FadeInView>
      </View>
    );
  }
}
