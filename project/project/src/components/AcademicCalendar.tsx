import React from 'react';

const AcademicCalendar: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Academic Calendar</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold mb-4">1. Exam Schedules</h3>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium">🧪 First Mid-Term Examinations</h4>
              <p>Dates: 17th to 19th February 2025</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium">🧪 Second Mid-Term Examinations</h4>
              <p>Dates: 21st to 23th April 2025</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium">📝 End Semester Examinations</h4>
              <p>Dates: 30th to 11th May 2025</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">2. Holidays</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {holidays.map((holiday, index) => (
              <div key={index} className="p-4 bg-green-50 rounded-lg">
                <p className="font-medium">{holiday.name}</p>
                <p className="text-sm text-gray-600">{holiday.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const holidays = [
  { name: 'Sankranthi Festival', date: '13 to 15-Jan-2025' },
  { name: 'Republic Day', date: '26-Jan-2025' },
  { name: 'Maha Shivaratri', date: '26-Feb-2025' },
  { name: 'Holi', date: '14-Mar-2025' },
  { name: 'Ugadi', date: '30-Mar-2025' },
  { name: 'Ramzan', date: '31-Mar-2025' },
  { name: "Babu Jagjivan Ram's Birthday", date: '05-Apr-2025' },
  { name: 'Sri Rama Navami', date: '06-Apr-2025' },
  { name: "Dr. B.R. Ambedkar's Birthday", date: '14-Apr-2025' },
  { name: 'Good Friday', date: '18-Apr-2025' },
];

export default AcademicCalendar;