import React from 'react';
import {
  User,
  GraduationCap,
  Calendar,
  CheckSquare,
  AlertCircle,
  MessageSquare,
  CreditCard,
  Award,
  FileText,
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, onSectionChange }) => {
  const menuItems = [
    { id: 'personal', label: 'Personal Information', icon: User },
    { id: 'academic', label: 'Academic Information', icon: GraduationCap },
    { id: 'calendar', label: 'Academic Calendar', icon: Calendar },
    { id: 'attendance', label: 'Attendance', icon: CheckSquare },
    { id: 'absent', label: 'Absent Logs', icon: AlertCircle },
    { id: 'feedback', label: 'Feedback', icon: MessageSquare },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'results', label: 'Results', icon: Award },
    { id: 'assignments', label: 'Assignments', icon: FileText },
  ];

  return (
    <aside className="w-64 bg-white shadow-md">
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onSectionChange(item.id)}
                  className={`w-full flex items-center px-4 py-2 text-sm rounded-md transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-100 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-3" />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;