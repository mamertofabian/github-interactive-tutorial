import React, { useState } from 'react';
import { Button } from '../ui/Button';

interface Challenge {
  id: string;
  task: string;
  hints: string[];
  solution: string;
  validation: (input: string) => boolean;
}

interface ChallengeContainerProps {
  title: string;
  description: string;
  challenges: Challenge[];
  onComplete: () => void;
}

export const ChallengeContainer: React.FC<ChallengeContainerProps> = ({
  title,
  description,
  challenges,
  onComplete
}) => {
  const [currentChallenge, setCurrentChallenge] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState('');

  const challenge = challenges[currentChallenge];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isCorrect = challenge.validation(userInput.trim());
    setAttempts(prev => prev + 1);

    if (isCorrect) {
      setFeedback('Correct! Well done!');
      if (currentChallenge === challenges.length - 1) {
        // All challenges completed
        setTimeout(onComplete, 1500);
      } else {
        setTimeout(() => {
          setCurrentChallenge(prev => prev + 1);
          setUserInput('');
          setShowHint(false);
          setFeedback('');
          setAttempts(0);
        }, 1500);
      }
    } else {
      setFeedback('Not quite right. Try again!');
      if (attempts >= 2 && !showHint) {
        setShowHint(true);
      }
    }
  };

  const handleShowSolution = () => {
    setUserInput(challenge.solution);
    setFeedback('Here\'s the solution. Take a moment to understand it!');
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
        <p className="text-gray-300 mb-6">{description}</p>

        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-semibold mb-3 text-white">
            Challenge {currentChallenge + 1} of {challenges.length}
          </h3>
          <p className="text-gray-300 mb-4">{challenge.task}</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                className="w-full bg-gray-900 text-white p-4 rounded-lg font-mono"
                rows={4}
                placeholder="Enter your solution here..."
              />
            </div>

            <div className="flex justify-between items-center">
              <div className="space-x-4">
                <Button type="submit" variant="primary">
                  Submit
                </Button>
                {attempts >= 3 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={handleShowSolution}
                  >
                    Show Solution
                  </Button>
                )}
              </div>
              {showHint && (
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setShowHint(false)}
                >
                  Hide Hint
                </Button>
              )}
            </div>
          </form>

          {feedback && (
            <div className={`mt-4 p-4 rounded-lg ${
              feedback.includes('Correct') 
                ? 'bg-green-800 text-green-100'
                : 'bg-red-800 text-red-100'
            }`}>
              {feedback}
            </div>
          )}

          {showHint && (
            <div className="mt-4 p-4 bg-blue-900 text-blue-100 rounded-lg">
              <h4 className="font-semibold mb-2">Hint:</h4>
              <ul className="list-disc list-inside">
                {challenge.hints.map((hint, index) => (
                  <li key={index}>{hint}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
