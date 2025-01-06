import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import EditPlan from './pages/EditPlan';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <div className="text-2xl font-special">Kinex</div>
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </header>
      <div className={`transition-max-height duration-300 ease-in-out ${menuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden`}>
        <nav className="bg-gray-700 p-4 flex flex-col items-center">
          <NavLink to="/kinex/dashboard" className="block px-4 py-2 hover:text-blue-400" end>
            Dashboard
          </NavLink>
          <NavLink to="/kinex/progress" className="block px-4 py-2 hover:text-blue-400">
            Progress
          </NavLink>
          <NavLink to="/kinex/edit-plan" className="block px-4 py-2 hover:text-blue-400">
            Edit Plan
          </NavLink>
        </nav>
      </div>
      <main className="p-4">
        <Routes>
          <Route path="/kinex/dashboard" element={<Dashboard />} />
          <Route path="/kinex/progress" element={<Progress />} />
          <Route path="/kinex/edit-plan" element={<EditPlan />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;