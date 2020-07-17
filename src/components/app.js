import React, { useState } from "react";
import { Header, Footer } from "./layouts";
import Exercises from "./exercises";
import { muscles, exercises } from "../store";

const getExercisesByMuscles = (exercises) => {
  return Object.entries(
    exercises.reduce((acc, curr) => {
      if (acc[curr.muscles] === undefined || acc[curr.muscles] === null) {
        acc[curr.muscles] = [curr];
      } else {
        acc[curr.muscles] = [...acc[curr.muscles], curr];
      }
      return acc;
    }, {})
  );
};

export default (props) => {
  const [category, setCategory] = useState("");
  const [exercise, setExercise] = useState(null);
  const _exercises = getExercisesByMuscles(exercises);
  const handleCategorySelected = (category) => {
    setCategory(category);
  };
  const handleExerciseSelected = (id) => {
    const ex = exercises.find((ex) => ex.id === id);
    setExercise(ex);
  };

  return (
    <>
      <Header />
      <Exercises
        category={category}
        exercise={exercise}
        exercises={_exercises}
        onSelect={handleExerciseSelected}
      />
      <Footer
        category={category}
        muscles={muscles}
        onSelect={handleCategorySelected}
      />
    </>
  );
};
