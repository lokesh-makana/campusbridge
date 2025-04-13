import React, { useState } from 'react';
import { Role } from '../types';
import Sidebar from './Sidebar';
import PersonalInformation from './PersonalInformation';
import AcademicInformation from './AcademicInformation';
import AcademicCalendar from './AcademicCalendar';
import Attendance from './Attendance';
import AbsentLogs from './AbsentLogs';
import Feedback from './Feedback';
import Payments from './Payments';
import Results from './Results';
import Assignments from './Assignments';
import { School } from 'lucide-react';

interface DashboardProps {
  role: Role;
}

const Dashboard: React.FC<DashboardProps> = ({ role }) => {
  const [activeSection, setActiveSection] = useState('personal');

  if (role === 'teacher') {
    return (
      <div className="min-h-screen bg-blue-50 p-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <div className="text-center">
            <School className="mx-auto h-16 w-16 text-blue-600" />
            <h1 className="text-2xl font-bold mt-4">Login Successful</h1>
            <p className="text-gray-600 mt-2">Welcome, Teacher!</p>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInformation />;
      case 'academic':
        return <AcademicInformation />;
      case 'calendar':
        return <AcademicCalendar />;
      case 'attendance':
        return <Attendance />;
      case 'absent':
        return <AbsentLogs />;
      case 'feedback':
        return <Feedback />;
      case 'payments':
        return <Payments />;
      case 'results':
        return <Results />;
      case 'assignments':
        return <Assignments />;
      default:
        return <PersonalInformation />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeSection={activeSection} onSectionChange={setActiveSection} />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <School className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold">Campus Bridge</h1>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;