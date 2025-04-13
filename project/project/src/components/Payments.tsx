import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';

const payments = [
  { name: 'Tuition Fees', status: 'Paid' },
  { name: 'Semster-1 Examination Fees', status: 'Paid' },
  { name: 'Semster-2 Examination Fees', status: 'Unpaid' },
];

const Payments: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Payments</h2>
      <div className="space-y-4">
        {payments.map((payment, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <span className="font-medium">{payment.name}</span>
            <span className={`flex items-center ${payment.status === 'Paid' ? 'text-green-600' : 'text-red-600'}`}>
              {payment.status === 'Paid' ? (
                <CheckCircle className="h-5 w-5 mr-2" />
              ) : (
                <XCircle className="h-5 w-5 mr-2" />
              )}
              {payment.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payments;