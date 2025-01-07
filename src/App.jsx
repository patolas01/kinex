import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Progress from './pages/Progress';
import EditPlan from './pages/EditPlan';

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative">
      <header className="p-4 bg-gray-800 flex justify-between items-center">
        <div className="text-2xl font-special">Kinex</div>
        <button className="md:hidden" onClick={() => setMenuOpen(true)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </header>
      {menuOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={() => setMenuOpen(false)}></div>}
      <div className={`fixed top-0 right-0 h-full w-full bg-gray-700 p-4 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} z-20 md:hidden`}>
        <button className="absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <nav className="flex flex-col items-center mt-8 space-y-4">
          <NavLink to="kinex/dashboard" className="block px-4 py-2 hover:text-blue-400 border-b border-gray-600 w-full text-center" end onClick={() => setMenuOpen(false)}>
            Dashboard
          </NavLink>
          <NavLink to="kinex/progress" className="block px-4 py-2 hover:text-blue-400 border-b border-gray-600 w-full text-center" onClick={() => setMenuOpen(false)}>
            Progress
          </NavLink>
          <NavLink to="kinex/edit-plan" className="block px-4 py-2 hover:text-blue-400 border-b border-gray-600 w-full text-center" onClick={() => setMenuOpen(false)}>
            Edit Plan
          </NavLink>
        </nav>
      </div>
      <main className="p-4">
        <Routes>
          <Route path="kinex/dashboard" element={<Dashboard />} />
          <Route path="kinex/progress" element={<Progress />} />
          <Route path="kinex/edit-plan" element={<EditPlan />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;