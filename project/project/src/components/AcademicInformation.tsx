import React from 'react';

const AcademicInformation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Academic Information</h2>
      <div className="space-y-4">
        <InfoRow label="Roll No" value="1234567890" />
        <InfoRow label="Program" value="B.Tech" />
        <InfoRow label="Branch" value="Computer Science and Engineering" />
        <InfoRow label="Semester" value="2" />
        <InfoRow label="Admission Year" value="2024" />
        <InfoRow label="Academic Year" value="2024-25" />
        <InfoRow label="Institution Name" value="Mohan Babu University" />
      </div>
    </div>
  );
};

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="flex">
    <span className="font-medium w-40">{label}:</span>
    <span>{value}</span>
  </div>
);

export default AcademicInformation;