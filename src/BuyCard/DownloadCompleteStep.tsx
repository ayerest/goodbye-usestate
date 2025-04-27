import React from 'react';
import Button from './Button.tsx';

const DownloadCompleteStep = ({handleOnClick}) => {
  return (
     <Button handleOnClick={handleOnClick} text="Redownload" />
  )
}

export default DownloadCompleteStep;