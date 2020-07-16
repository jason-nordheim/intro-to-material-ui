import React, { useState } from 'react' 
import { Header, Footer } from './layouts' 
import Exercises from './exercises'
import { muscles, exercises } from '../store'

const getExercisesByMuscles = ( exercises ) => {
  return Object.entries(exercises.reduce((acc, curr) => {
    if (acc[curr.muscles] === undefined || acc[curr.muscles] === null) {
      acc[curr.muscles] = [curr];
    } else { 
      acc[curr.muscles] = [...acc[curr.muscles], curr];
    }
    return acc 
  }, {}))
}

export default props => { 
  const [category, setCategory] = useState('arms')
  const _exercises = getExercisesByMuscles(exercises);
  const handleCategorySelected = category => {
    setCategory(category)
  }

  return (
    <>
      <Header />
      <Exercises category={category} exercises={_exercises} />
      <Footer category={category} muscles={muscles} onSelect={handleCategorySelected}/>
    </>
  );
}