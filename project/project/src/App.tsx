import React, { useState } from 'react';
import { Role } from './types';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState<Role | null>(null);

  if (!role) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-8">Welcome to Campus Bridge</h1>
          <div className="space-y-4">
            <button
              onClick={() => setRole('student')}
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Student
            </button>
            <button
              onClick={() => setRole('teacher')}
              className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
              Teacher
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return <Login role={role} onLogin={() => setIsLoggedIn(true)} />;
  }

  return <Dashboard role={role} />;
}

export default App;