import React from 'react';

const results = [
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'English For Professional',
    credit: 3,
    gradePoint: 8,
    grade: 'A',
    resultStatus: 'Pass',
  },
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'PROGRAMMING FOR PROBLEM SOLVING',
    credit: 4,
    gradePoint: 7,
    grade: 'B+',
    resultStatus: 'Pass',
  },
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'DESIGN THINKING',
    credit: 2,
    gradePoint: 10,
    grade: 'O',
    resultStatus: 'Pass',
  },
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'PHYSICS FOR COMPUTING',
    credit: 4,
    gradePoint: 8,
    grade: 'A',
    resultStatus: 'Pass',
  },
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'MATRIX THEORY AND LINEAR ALGEBRA',
    credit: 3,
    gradePoint: 7,
    grade: 'B+',
    resultStatus: 'Pass',
  },
  {
    semester: 'I-Semester - Batch-I',
    courseName: 'DIGITAL LOGIC DESIGN',
    credit: 3,
    gradePoint: 7,
    grade: 'B+',
    resultStatus: 'Pass',
  }
];

const Results: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Results</h2>
      <h3 className="text-xl font-semibold mb-4">I-Semester - Batch-I (Dec-2024)</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade Point</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result Status</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {results.map((result, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{result.courseName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{result.credit}</td>
                <td className="px-6 py-4 whitespace-nowrap">{result.gradePoint}</td>
                <td className="px-6 py-4 whitespace-nowrap">{result.grade}</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">{result.resultStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="font-medium">Summary</p>
        <div className="mt-2 space-y-1">
          <p>Credit Registered: 19</p>
          <p>Credit Completed: 19</p>
          <p>SGPA: 7.68</p>
          <p>CGPA: 7.68</p>
        </div>
      </div>
    </div>
  );
};

export default Results;