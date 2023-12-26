import React from 'react';
import '/styles.css';
import Card from './components/card';
import SideBarButton from './components/sidebarBtn';


const Dashboard: React.FC = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="bg-gray-800 text-white w-1/5 p-6">
        <h2 className="bg-gray text-2xl font-bold mb-4">Quick List Dashboard</h2>
        <ul className="list-none p-0">
      <li>
        <SideBarButton />
      </li>
      <li>
        <SideBarButton />
      </li>
      <li>
        <SideBarButton />
      </li>
      <li>
        <SideBarButton />
      </li>
         </ul> 
        {/* Add your sidebar links or navigation items here */}
      </div>
      {/* Main Content */}
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-4">Quicklist Appointments</h1>
        <Card title="Test Appointment" />
        <div className="mb-4" /> {/* Add a div with margin-bottom for spacing */}
        <Card title="Test Appointment" />
        <div className="mb-4" />
        <Card title="Test Appointment" />
        <div className="mb-4" />
        <Card title="Test Appointment" />
        <div className="mb-4" />
        <Card title="Test Appointment" />
      </div>
    </div>
  );
};

export default Dashboard;