import React, { useState } from 'react';
import Button from './Button.tsx';
import "../App.css";

const SelectDownloadMethod = ({handleOnClick}) => {
  const [downloadMethod, setDownloadMethod] = useState('');
  
  const handleChangeMethod = (method: string) => {
    setDownloadMethod((prevState) => {
      return method;
    })

  }

  return (
    <div className="formContainer">
      <label>
        <input checked={downloadMethod === 'Credits'} type="radio" onChange={() => handleChangeMethod('Credits')} value={downloadMethod} />
        Credits
      </label>
      <label>
        <input checked={downloadMethod === 'Subscription'} type="radio" onChange={() => handleChangeMethod('Subscription')} value={downloadMethod}  />
        Subscription
      </label>
      <Button handleOnClick={handleOnClick} text="Select Download Method" />
      </ div> 
  )
}

export default SelectDownloadMethod;