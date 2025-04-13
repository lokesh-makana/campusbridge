import React from 'react';

const PersonalInformation: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            alt="Student Photo"
            className="w-48 h-48 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="space-y-4">
          <InfoRow label="Name" value="Thota Ajay Kumar" />
          <InfoRow label="Father Name" value="Thota Aravind" />
          <InfoRow label="Mother Name" value="Thota Vijaya Lakshmi" />
          <InfoRow label="Gender" value="Male" />
          <InfoRow label="Date Of Birth" value="12-03-2005" />
          <InfoRow label="Blood Group" value="B+" />
          <InfoRow label="Religion" value="Hindu" />
          <InfoRow label="Contact Number" value="7111100008" />
          <InfoRow label="E-Mail" value="Ajay@gmail.com" />
          <InfoRow label="Address" value="7-26,Ramanagar colony,Eluru,AP" />
          <InfoRow label="Nationality" value="Indian" />
        </div>
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

export default PersonalInformation;