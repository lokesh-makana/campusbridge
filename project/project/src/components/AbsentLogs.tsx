import React from 'react';

const absentLogs = [
  { month: 'April', date: 14, year: 2025, day: 'Monday', subject: 'Discrete Mathematical Structures' },
  { month: 'April', date: 11, year: 2025, day: 'Friday', subject: 'Soft Skills' },
  { month: 'April', date: 9, year: 2025, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'April', date: 1, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'March', date: 26, year: 2025, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'March', date: 24, year: 2025, day: 'Monday', subject: 'STEP' },
  { month: 'March', date: 21, year: 2025, day: 'Friday', subject: 'Basic Electrical and Electronics Engineering' },
  { month: 'March', date: 18, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'March', date: 17, year: 2025, day: 'Monday', subject: 'Calculus and Transformation Techniques' },
  { month: 'March', date: 14, year: 2025, day: 'Friday', subject: 'Soft Skills' },
  { month: 'March', date: 10, year: 2025, day: 'Monday', subject: 'Object Oriented Programming Through Java' },
  { month: 'March', date: 5, year: 2025, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'March', date: 4, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'March', date: 3, year: 2025, day: 'Monday', subject: 'Discrete Mathematical Structures' },
  { month: 'February', date: 28, year: 2025, day: 'Friday', subject: 'Soft Skills' },
  { month: 'February', date: 18, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'February', date: 17, year: 2025, day: 'Monday', subject: 'STEP' },
  { month: 'February', date: 14, year: 2025, day: 'Friday', subject: 'Basic Electrical and Electronics Engineering' },
  { month: 'February', date: 12, year: 2025, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'February', date: 5, year: 2025, day: 'Wednesday', subject: 'Discrete Mathematical Structures' },
  { month: 'February', date: 4, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'January', date: 22, year: 2025, day: 'Wednesday', subject: 'Discrete Mathematical Structures' },
  { month: 'January', date: 21, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'January', date: 20, year: 2025, day: 'Monday', subject: 'Calculus and Transformation Techniques' },
  { month: 'January', date: 17, year: 2025, day: 'Friday', subject: 'Soft Skills' },
  { month: 'January', date: 15, year: 2025, day: 'Wednesday', subject: 'Object Oriented Programming Through Java' },
  { month: 'January', date: 13, year: 2025, day: 'Monday', subject: 'STEP' },
  { month: 'January', date: 10, year: 2025, day: 'Friday', subject: 'Basic Electrical and Electronics Engineering' },
  { month: 'January', date: 8, year: 2025, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'January', date: 7, year: 2025, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'December', date: 17, year: 2024, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' },
  { month: 'December', date: 12, year: 2024, day: 'Thursday', subject: 'Discrete Mathematical Structures' },
  { month: 'December', date: 11, year: 2024, day: 'Wednesday', subject: 'Professional Ethics and Human Values' },
  { month: 'December', date: 9, year: 2024, day: 'Monday', subject: 'STEP' },
  { month: 'December', date: 6, year: 2024, day: 'Friday', subject: 'Soft Skills' },
  { month: 'December', date: 3, year: 2024, day: 'Tuesday', subject: 'Computer Hardware and System Essentials' }
];

const AbsentLogs: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Absent Logs</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Year</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Day</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {absentLogs.map((log, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{log.month}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.date}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.year}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.day}</td>
                <td className="px-6 py-4 whitespace-nowrap">{log.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AbsentLogs;