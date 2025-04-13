import React from 'react';
import { MessageSquare } from 'lucide-react';

const Feedback: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Feedback</h2>
      <div className="flex flex-col items-center justify-center py-12">
        <MessageSquare className="h-16 w-16 text-gray-400 mb-4" />
        <p className="text-gray-500 text-lg">No Feedbacks Found!</p>
      </div>
    </div>
  );
};

export default Feedback;