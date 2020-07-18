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
  const [exerciseList, setExerciseList] = useState(
    getExercisesByMuscles(exercises)
  );
  const handleCategorySelected = (category) => {
    setCategory(category);
  };

  const handleExerciseSelected = (id) => {
    exerciseList.forEach((category) => {
      const ex = category[1].find((ex) => ex.id === id);
      if (ex) setExercise(ex);
    });
  };

  const handleExerciseCreate = (newExercise) => {
    let exExists = false 
    let newId = 1 
    exercises.forEach(ex => {
      if (newId < ex.id) {
        newId = ex.id 
      } 

      if(ex.title === newExercise.title){
        exExists = true 
        console.error('exercise already exists')
        return 
      }
    })
    
    if(exExists === false){
      const newEx = {...newExercise, id: (newId + 1)}
      console.log('adding...', newEx)
      exercises.push(newEx)
      setExerciseList(getExercisesByMuscles(exercises))
    }
  };

  return (
    <>
      <Header onCreate={handleExerciseCreate} />
      <Exercises
        category={category}
        exercise={exercise}
        exercises={exerciseList}
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
