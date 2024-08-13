import React, { useEffect, useMemo, useState } from 'react'
import './App.css'

const App = () => {
  const[weight, setWeight] = useState(70);
  const[height, setHeight] = useState(180);
  function onHeightChange(e){
    setHeight(e.target.value);
  }
  function onWeightChange(e){
    setWeight(e.target.value);
  }
  const output = useMemo(() => {
    return calculateBMI(weight, height);
  },[weight, height]);

  function calculateBMI(weight, height){
    let h = height / 100;
    let w = weight;
    h *= h;
    let bmi = w / h;
    bmi = parseFloat(bmi).toFixed(2);
    return bmi;
  }

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className='input-section'>
        <p className='slider-output'>Weight: <span className='weight-value'>{weight}</span> kg</p>
        <input className='input-slider'
         type='range'
         step='1'
         min='40'
         max='200'
         onChange={onWeightChange}
         />
        <p className='slider-output'>Height: <span className='weight-value'>{height}</span> cm</p>
        <input className='input-slider'
         type='range'
         step='1'
         min='100'
         max='300'
         onChange={onHeightChange}
        //  min='40'
        //  max='200'
         />
      </div>
      <div className='output-section'>
        <p>Your BMI is:</p>
        <p className='output'>{output}</p>
      </div>
    </main>
  )
}

export default App
