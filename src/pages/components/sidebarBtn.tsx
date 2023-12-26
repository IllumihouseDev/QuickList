import React from 'react';
import '/styles.css';


const SideBarButton: React.FC = () => {
  return (
    <button className="w-40 h-40 bg-blue-500 text-white rounded-md">
      {/* Icon or content goes here */}
      Modify Apointment
    </button>
  );
};

export default SideBarButton;