// AnimatedButton.js
import React from 'react';
import '../style/Button.css'; // Assuming your CSS is in AnimatedButton.css

const AnimatedButton = ({ type = 'button', onClick, children }) => {
  return (
    <button type={type} className="custom-btn btn-3" onClick={onClick}>
      <span>{children}</span>
    </button>
   
  );
};

export default AnimatedButton;
