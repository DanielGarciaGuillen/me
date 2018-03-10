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
    paddingTop: 10,
    fontSize: 20,
    paddingBottom: 10,
    color: "white"
  },
  h1: {
    textAlign: "center",
    paddingTop: 10,
    fontSize: 25,
    paddingBottom: 10,
    color: "white",
    fontWeight: "bold"
  },
  buttonNext: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  buttontext: {
    fontSize: 17,
    color: "white",
    alignSelf: "center"
  },
  handleft: {
    fontSize: 25,
    color: "white",
    alignSelf: "center"
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 2
  },
  rocket: {
    width: 250,
    height: 1150,
    marginLeft: 220
  }
});
