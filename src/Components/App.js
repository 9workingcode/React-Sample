import React, { Component, Fragment } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";
import { muscles, exercises } from "../store";

export default class extends Component {
  state = {
    exercises
  };

  getExercises() {
    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const { muscles } = exercise;
        exercises[muscles] = exercises[muscles]
          ? [...exercises[muscles], exercise]
          : [exercise];
        return exercises;
      }, {})
    );
  }

  render() {
    console.log(this.getExercises());
    return (
      <Fragment>
        <Header />
        <Exercises exercises={exercises} />
        <Exercises />
        <Footer muscles={muscles} />
      </Fragment>
    );
  }
}
