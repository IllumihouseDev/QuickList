import React from 'react';
import '/styles.css';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/5 p-6">
        <h2 className="bg-gray text-2xl font-bold mb-4">Sidebar Content</h2>
        {/* Add your sidebar links or navigation items here */}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">Quicklist Dashboard</h1>
        {/* Add your main content here */}
      </div>
    </div>
  );
};

export default Dashboard;