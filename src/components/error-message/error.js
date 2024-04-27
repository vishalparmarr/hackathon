import React from 'react';

const ErrorMessage = ({message}) => {
  return (
    <div style={{color:'red'}}>
      {message}
    </div>
  );
};

export default ErrorMessage;