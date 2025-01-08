import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Move NavigationBar to its own file
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Calendar';
import Plan from './pages/Plan';
import Profile from './pages/Profile';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col pb-16">
      <Routes>
        <Route path="/kinex/dashboard" element={<Dashboard />} />
        <Route path="/kinex/calendar" element={<Calendar />} />
        <Route path="/kinex/plan" element={<Plan />} />
        <Route path="/kinex/profile" element={<Profile />} />
        <Route path="*" element={<Dashboard />} />
      </Routes>
      {/* Navigation Bar always visible */}
      <NavigationBar />
    </div>
  );
};

export default App;
