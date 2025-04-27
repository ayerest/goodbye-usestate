import React from 'react';
import Button from './Button.tsx';

const DownloadStep = ({handleOnClick}) => {
  return (
     <Button handleOnClick={handleOnClick} text="Download" />
  )
}

export default DownloadStep;