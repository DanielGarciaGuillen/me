import React from "react";
import { Animated, Text, View } from "react-native";

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
    let { changeSize } = this.state;
    console.log(this.state.borderRadius);

    return (
      <Animated.View // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,
          transform: [
            {
              translateY: this.state.fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [150, -500]
              })
            },
            { skewX: "45deg" }
          ]
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}

// You can then use your `FadeInView` in place of a `View` in your components:
export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <FadeInView
          style={{ width: 250, height: 50, backgroundColor: "powderblue" }}
        >
          <Text style={{ fontSize: 28, textAlign: "center", margin: 10 }}>
            Hire Me!!!
          </Text>
        </FadeInView>
      </View>
    );
  }
}
