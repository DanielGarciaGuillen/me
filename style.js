"use strict";

var React = require("react-native");

var { StyleSheet } = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black"
  },
  maintext: {
    textAlign: "center",
    paddingTop: 20,
    fontSize: 20,
    paddingBottom: 20,
    color: "white"
  },
  h1: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 40,
    paddingBottom: 20,
    color: "white"
  },
  moreselly: {
    fontSize: 17,
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  lessselly: {
    fontSize: 17,
    color: "white"
  },
  handleft: {
    fontSize: 30
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 4
  },
  rocket: {
    width: 150,
    height: 950
  }
});
