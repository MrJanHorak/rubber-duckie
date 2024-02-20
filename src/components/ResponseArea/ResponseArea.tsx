import React from 'react';
import './ResponseArea.css';

interface ResponseAreaProps {
  response: string;
}

const ResponseArea: React.FC<ResponseAreaProps> = ({ response }) => {
  return (
    <div className='response-area'>
      <p>{response}</p>
    </div>
  );
};

export default ResponseArea;