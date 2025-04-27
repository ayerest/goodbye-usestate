import React, { useState } from 'react';
import SelectDownloadMethod from './SelectMethodStep.tsx';
import InitiateDownload from './DownloadStep.tsx';
import ConfirmDownload from './ConfirmDownloadStep.tsx';
import DownloadComplete from './DownloadCompleteStep.tsx';
import '../App.css';

const BuyCard1 = () => {
  const [initiateDownloadStep, setInitiateDownloadStep] = useState(true);
  const [selectDownloadMethodStep, setSelectMethodStep] = useState(false);
  const [confirmDownloadStep, setConfirmDownloadStep] = useState(false);
  const [downloadCompleteStep, setDownloadCompleteStep] = useState(false);

  const handleGoToSelectMethodStep = () => {
    setSelectMethodStep(true);
    setInitiateDownloadStep(false);
  }

  const handleGoToConfirmDownloadStep = () => {
    setConfirmDownloadStep(true);
    setSelectMethodStep(false);
  }

  const handleGoToDownloadCompleteStep = () => {
    setDownloadCompleteStep(true);
    setConfirmDownloadStep(false);
  }

  return (
    <div className="container">
      {initiateDownloadStep ? <InitiateDownload handleOnClick={handleGoToSelectMethodStep} /> : null}
      {selectDownloadMethodStep ? <SelectDownloadMethod handleOnClick={handleGoToConfirmDownloadStep} /> : null}
      {confirmDownloadStep ? <ConfirmDownload  handleOnClick={handleGoToDownloadCompleteStep}/> : null}
      {downloadCompleteStep ? <DownloadComplete handleOnClick={() => {}} /> : null}
    </div>
  )
}

type DownloadStatus = 'INITIATE DOWNLOAD' | 'SELECT DOWNLOAD METHOD' | 'CONFIRM DOWNLOAD' | 'DOWNLOAD COMPLETE';

const BuyCard2 = () => {
   const [status, setStatus] = useState<DownloadStatus>('INITIATE DOWNLOAD');

   return (
    <div className="container">
      {status === 'INITIATE DOWNLOAD' ? <InitiateDownload handleOnClick={() => setStatus('SELECT DOWNLOAD METHOD')} /> : null}
      {status === 'SELECT DOWNLOAD METHOD' ? <SelectDownloadMethod handleOnClick={() => setStatus('CONFIRM DOWNLOAD')} /> : null}
      {status === 'CONFIRM DOWNLOAD' ? <ConfirmDownload  handleOnClick={() => setStatus('DOWNLOAD COMPLETE')}/> : null}
      {status === 'DOWNLOAD COMPLETE' ? <DownloadComplete handleOnClick={() => {}} /> : null}
    </div>
  )
}

export default BuyCard1;
// export default BuyCard2;