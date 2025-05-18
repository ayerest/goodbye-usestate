import React from 'react';

const ErrorMessage = ({ error }) => {
  return (
    <h2>{error.message}</h2>
  )
}

export default ErrorMessage;