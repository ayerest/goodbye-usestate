import React from 'react';
import Button from './Button.tsx';

const DownloadComplete = ({handleOnClick}) => {
  return (
     <Button handleOnClick={handleOnClick} text="Confirm Download" />
  )
}

export default DownloadComplete;