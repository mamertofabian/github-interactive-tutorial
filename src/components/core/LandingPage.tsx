import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../contexts/UserContext';
import { Button } from '../ui/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUserContext();

  const handleGetStarted = () => {
    if (user && user.progress) {
      navigate('/resume');
    } else {
      navigate('/overview');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            Learn GitHub Interactive
          </h1>
          <p className="text-xl mb-8">
            Master Git and GitHub through hands-on interactive lessons
          </p>
          
          <div className="flex justify-center space-x-4">
            <Button
              onClick={handleGetStarted}
              variant="primary"
              size="lg"
              className="px-8"
            >
              {user && user.progress ? 'Continue Learning' : 'Get Started'}
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Interactive Learning</h3>
              <p>Practice Git commands in a safe environment with real-time feedback</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Visual Guides</h3>
              <p>Understand complex Git concepts through animated visualizations</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Hands-on Challenges</h3>
              <p>Test your knowledge with practical exercises and projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
