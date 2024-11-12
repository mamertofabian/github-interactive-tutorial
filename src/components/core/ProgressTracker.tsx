import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useTutorialContext } from '../../contexts/TutorialContext';

const steps = [
  { id: 'intro', name: 'Introduction', completed: true },
  { id: 'setup', name: 'Environment Setup', completed: true },
  { id: 'first-repo', name: 'First Repository', completed: true },
  { id: 'branching', name: 'Understanding Branching', completed: false },
  { id: 'collaboration', name: 'Collaborating on GitHub', completed: false },
  { id: 'conflicts', name: 'Handling Conflicts', completed: false },
  { id: 'best-practices', name: 'Git Commands & Best Practices', completed: false },
  { id: 'project-management', name: 'Project Management', completed: false },
  { id: 'interactive-challenges', name: 'Interactive Challenges', completed: false },
];

export const ProgressTracker: React.FC = () => {
  const { setCurrentSection, content } = useTutorialContext();

  const handleStepClick = (stepId: string) => {
    setCurrentSection(stepId);
  };

  const { completedSections } = useTutorialContext();
  
  // Get sections from the context with actual completion status
  const tutorialSteps = content.sections.map((section) => ({
    id: section.id,
    name: section.title,
    completed: completedSections.has(section.id)
  }));

  return (
    <div className="w-64 bg-gray-800 p-4 min-h-screen">
      <h2 className="text-lg font-semibold text-white mb-4">Your Progress</h2>
      <div className="space-y-4">
        {tutorialSteps.map((step) => (
          <button
            key={step.id}
            onClick={() => handleStepClick(step.id)}
            className={`flex items-center space-x-3 text-gray-300 w-full text-left p-2 rounded hover:bg-gray-700 transition-colors duration-200 ${
              step.completed ? 'hover:text-white' : 'hover:text-gray-100'
            }`}
          >
            <CheckCircleIcon
              className={`h-5 w-5 ${
                step.completed ? 'text-green-500' : 'text-gray-600'
              }`}
            />
            <span className={step.completed ? 'text-white' : ''}>
              {step.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
