import React, { useState } from 'react' 
import { Header, Footer } from './layouts' 
import Exercises from './exercises'

export default props => { 
  return (
    <>
      <Header />
      <Exercises /> 
      <Footer /> 
    </>
  )
}