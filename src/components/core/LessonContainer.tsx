import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { Button } from '../ui/Button';
import { ConceptCard } from '../educational/ConceptCard';
import { InteractiveTerminal } from '../interactive/InteractiveTerminal';
import { ChallengeContainer } from '../challenges/ChallengeContainer';
import { VisualizationContainer } from '../interactive/VisualizationContainer';

interface Section {
  type: 'theory' | 'practice' | 'challenge';
  content: any;
}

const LessonContainer: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  const { getLessonById, updateProgress } = useTutorialContext();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const lesson = getLessonById(lessonId || '');

  useEffect(() => {
    if (!lesson) {
      navigate('/lessons');
    }
  }, [lesson, navigate]);

  if (!lesson) {
    return null;
  }

  const sections: Section[] = lesson.sections;

  const handleSectionComplete = () => {
    if (currentSectionIndex < sections.length - 1) {
      setCurrentSectionIndex(prev => prev + 1);
    } else {
      setIsComplete(true);
      updateProgress(lessonId || '');
    }
  };

  const handleNext = () => {
    if (isComplete) {
      navigate('/lessons');
    } else {
      handleSectionComplete();
    }
  };

  const handlePrevious = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(prev => prev - 1);
    }
  };

  const renderSection = (section: Section) => {
    switch (section.type) {
      case 'theory':
        return (
          <div className="space-y-6">
            <ConceptCard {...section.content} />
            {section.content.visualization && (
              <VisualizationContainer {...section.content.visualization} />
            )}
          </div>
        );
      case 'practice':
        return (
          <InteractiveTerminal
            {...section.content}
            onComplete={handleSectionComplete}
          />
        );
      case 'challenge':
        return (
          <ChallengeContainer
            {...section.content}
            onComplete={handleSectionComplete}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        {/* Lesson Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">
                {currentSectionIndex + 1} of {sections.length}
              </span>
            </div>
          </div>
          <div className="mt-2 flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              ⏱️ {lesson.duration}
            </span>
            <span className="text-sm text-gray-400">
              📚 {lesson.difficulty}
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-8 bg-gray-800 h-2 rounded-full">
          <div
            className="bg-blue-600 h-full rounded-full transition-all duration-300"
            style={{
              width: `${((currentSectionIndex + 1) / sections.length) * 100}%`
            }}
          />
        </div>

        {/* Section Content */}
        <div className="bg-gray-800 rounded-lg p-6 mb-8">
          {renderSection(sections[currentSectionIndex])}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <Button
            onClick={handlePrevious}
            variant="secondary"
            disabled={currentSectionIndex === 0}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            variant="primary"
          >
            {isComplete ? 'Complete Lesson' : 'Next'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LessonContainer;
