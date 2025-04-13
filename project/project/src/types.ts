export type Role = 'student' | 'teacher';

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AttendanceData {
  subject: string;
  percentage: number;
}

export interface AbsentLog {
  month: string;
  date: number;
  year: number;
  day: string;
  subject: string;
}

export interface Result {
  semester: string;
  courseName: string;
  credit: number;
  gradePoint: number;
  grade: string;
  resultStatus: string;
}

export interface PersonalInfo {
  name: string;
  fatherName: string;
  motherName: string;
  gender: string;
  dateOfBirth: string;
  bloodGroup: string;
  religion: string;
  contactNumber: string;
  email: string;
  address: string;
  nationality: string;
}

export interface AcademicInfo {
  rollNo: string;
  program: string;
  branch: string;
  semester: string;
  admissionYear: string;
  academicYear: string;
  institutionName: string;
}