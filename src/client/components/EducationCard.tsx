import React from 'react';

interface EducationCardProps {
  school: string;
  degree: string;
  percentage?: string;
  cgpa?: string;
  year: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ school, degree, percentage, cgpa, year }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-bold">{school}</h3>
      <p>{degree}</p>
      {percentage && <p>Percentage: {percentage}</p>}
      {cgpa && <p>CGPA: {cgpa}</p>}
      <p>Year: {year}</p>
    </div>
  );
};

export default EducationCard;
