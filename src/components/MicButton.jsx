import React from 'react';
import { CiMicrophoneOn } from "react-icons/ci";
<style jsx>{`button {
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
}

button.listening {
  animation: blink-animation 1s infinite;
}

@keyframes blink-animation {
  50% {
    opacity: 0.5;
  }
}`}</style>


const MicButton = () => {
  return (
    <button className="voice">
        <CiMicrophoneOn />
    </button>
  );
};

export default MicButton;
