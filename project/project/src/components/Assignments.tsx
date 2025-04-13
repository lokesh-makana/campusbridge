import React from 'react';

const assignments = [
  "Write a program that prints the numbers from 1 to 100. But for multiples of three, print \"Fizz\" instead of the number, and for the multiples of five, print \"Buzz\". For numbers that are multiples of both three and five, print \"FizzBuzz\".",
  "Write a Java program to reverse a given string without using any built-in functions or libraries.",
  "Find the missing number in an array containing distinct numbers taken from 0 to n, you can utilize the concept of arithmetic progression and Gauss's formula. Here's a Java program to find the missing number:",
  "Write a Java program to check if a given string is a palindrome or not.",
  "Write a Java program to find all duplicate elements in an array.",
  "Write a Java function to find the longest common prefix string amongst an array of strings.",
  "Write a Java program to count the number of words in a given sentence.",
  "Write a Java program to check if a given number is prime or not.",
  "Write a Java program to swap two numbers without using third variable.",
  "Given an array arr[] of N distinct elements and a number K, where K is smaller than the size of the array. Find the K'th smallest element in the given array.",
  "Write a Program to print * in Right angle triangle shape",
  "Write a Program to print * in Diamond shape",
  "Write a Program to print * in Pyramid shape",
  "Write a Program for linear search",
  "Write a Program to Sorting of arrays",
  "Write a Program to print Armstrong",
  "Write a Program to print Fibonacci Series",
  "Write a program to find factorial of a number in java",
  "Write a program to sum of digits in a number",
  "Write a program to convert Decimal to binary Number"
];

const Assignments: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">Assignments</h2>
      
      <div className="space-y-4">
        {assignments.map((assignment, index) => (
          <div key={index} className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-2">Q{index + 1}.</h3>
            <p className="text-gray-700">{assignment}</p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-red-50 rounded-lg">
        <p className="font-medium text-red-600">Submission Deadline: 10-Apr-2025</p>
      </div>
    </div>
  );
};

export default Assignments;