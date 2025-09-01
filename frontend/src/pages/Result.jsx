import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";

const Result = () => {
  const [results, setResults] = useState([]);

  // Dummy data for now
  useEffect(() => {
    const dummyResults = [
      { id: 1, student: "John Doe", subject: "Math", marks: 85 },
      { id: 2, student: "Jane Smith", subject: "Physics", marks: 92 },
      { id: 3, student: "Alice Johnson", subject: "Chemistry", marks: 78 },
    ];
    setResults(dummyResults);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Nav />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">
          Results
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-700 text-white">
                <th className="py-3 px-6 text-left">Student</th>
                <th className="py-3 px-6 text-left">Subject</th>
                <th className="py-3 px-6 text-left">Marks</th>
              </tr>
            </thead>
            <tbody>
              {results.map((result) => (
                <tr key={result.id} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="py-3 px-6">{result.student}</td>
                  <td className="py-3 px-6">{result.subject}</td>
                  <td className="py-3 px-6">{result.marks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Result;
