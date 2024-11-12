import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { Button } from '../ui/Button';

const TutorialOverview: React.FC = () => {
  const navigate = useNavigate();
  const { content } = useTutorialContext();

  const features = [
    {
      title: 'Interactive Learning',
      description: 'Practice Git commands in a safe environment with real-time feedback',
      icon: '🔨'
    },
    {
      title: 'Visual Guides',
      description: 'Understand complex Git concepts through animated visualizations',
      icon: '📊'
    },
    {
      title: 'Hands-on Challenges',
      description: 'Test your knowledge with practical exercises and projects',
      icon: '🎯'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Course Overview</h1>
          <p className="text-xl text-gray-300">
            Master Git and GitHub through our comprehensive interactive tutorial series
          </p>
        </div>

        {/* Key Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Course Structure */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Course Structure</h2>
          <div className="space-y-4">
            {(content?.sections || []).map((section, index) => (
              <div key={section.id} className="bg-gray-800 p-6 rounded-lg">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center space-x-3">
                      <span className="text-blue-400 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold">{section.title}</h3>
                    </div>
                    <p className="text-gray-300 mt-2">{section.content.overview}</p>
                    <div className="mt-3 flex items-center space-x-4">
                      {section.content.steps && (
                        <span className="text-sm text-gray-400">
                          ⏱️ {`${section.content.steps.length} steps`}
                        </span>
                      )}
                      {section.content.challenges && (
                        <span className="text-sm text-gray-400">
                          📚 {`${section.content.challenges.length} challenges`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => navigate('/lesson/intro-git')}
            variant="primary"
            size="lg"
            className="px-8"
          >
            Start Learning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TutorialOverview;
