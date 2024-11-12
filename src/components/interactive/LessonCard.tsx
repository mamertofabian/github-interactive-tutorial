import React from 'react';

interface LessonCardProps {
  title: string;
  description: string;
  duration: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

export const LessonCard: React.FC<LessonCardProps> = ({
  title,
  description,
  duration,
  difficulty,
}) => {
  const difficultyColor = {
    beginner: 'text-green-400',
    intermediate: 'text-yellow-400',
    advanced: 'text-red-400',
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-gray-400">{duration}</span>
        <span className={difficultyColor[difficulty]}>
          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
        </span>
      </div>
    </div>
  );
};