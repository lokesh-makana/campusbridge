import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const attendanceData = [
  { subject: 'Object Oriented Programming Through Java', percentage: 97 },
  { subject: 'Discrete Mathematical Structures', percentage: 92 },
  { subject: 'Computer Hardware and System Essentials', percentage: 85 },
  { subject: 'Basic Electrical and Electronics Engineering', percentage: 95 },
  { subject: 'Soft Skills', percentage: 91 },
  { subject: 'STEP', percentage: 93 },
  { subject: 'Professional Ethics and Human Values', percentage: 90 },
  { subject: 'Calculus and Transformation Techniques', percentage: 96 },
];

const Attendance: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Attendance</h2>
      
      <div className="mb-8">
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Attendance (%)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {attendanceData.map((item, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap">{item.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{item.percentage}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attendanceData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" angle={-45} textAnchor="end" interval={0} height={100} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <Bar dataKey="percentage" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Attendance;