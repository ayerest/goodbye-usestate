import React from 'react';
import Button from './Button.tsx';

const ConfirmDownloadStep = ({handleOnClick}) => {
  return (
     <Button handleOnClick={handleOnClick} text="Confirm Download" />
  )
}

export default ConfirmDownloadStep;