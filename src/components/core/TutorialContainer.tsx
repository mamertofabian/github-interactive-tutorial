import React from 'react';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { ConceptCard } from '../educational/ConceptCard';
import { TermDefinition } from '../educational/TermDefinition';
import { StepGuide } from '../educational/StepGuide';

export const TutorialContainer: React.FC = () => {
  const { content, currentSection, setCurrentSection, getSectionById } = useTutorialContext();
  const section = currentSection ? getSectionById(currentSection) : content.sections[0];

  if (!section) return null;

  const handleNextSection = () => {
    const currentIndex = content.sections.findIndex(s => s.id === section.id);
    if (currentIndex < content.sections.length - 1) {
      setCurrentSection(content.sections[currentIndex + 1].id);
    }
  };

  const handlePreviousSection = () => {
    const currentIndex = content.sections.findIndex(s => s.id === section.id);
    if (currentIndex > 0) {
      setCurrentSection(content.sections[currentIndex - 1].id);
    }
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg m-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-2">{content.title}</h1>
          <h2 className="text-xl font-bold text-white">{section.title}</h2>
          <p className="text-gray-300 mt-2">{section.content.overview}</p>
        </div>

        {section.content.concepts && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Key Concepts</h3>
            {section.content.concepts.map((concept, index) => (
              <ConceptCard
                key={index}
                title={concept.title}
                description={concept.description}
                visualization={concept.visualization}
              />
            ))}
          </div>
        )}

        {section.content.keyTerms && (
          <div className="space-y-4 mb-8">
            <h3 className="text-lg font-semibold text-white">Key Terms</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.content.keyTerms.map((term, index) => (
                <TermDefinition
                  key={index}
                  term={term.term}
                  definition={term.definition}
                />
              ))}
            </div>
          </div>
        )}

        {section.content.steps && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Steps</h3>
            {section.content.steps.map((step, index) => (
              <StepGuide
                key={index}
                title={step.title}
                steps={step.steps}
                instructions={step.instructions}
                visualization={step.visualization}
              />
            ))}
          </div>
        )}

        {section.content.practice && (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">Practice</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              <h4 className="text-white font-medium mb-4">{section.content.practice.title}</h4>
              <div className="space-y-4">
                {section.content.practice.steps.map((step, index) => (
                  <div key={index} className="bg-gray-600 p-4 rounded">
                    <p className="text-white font-medium mb-2">{step.action}</p>
                    <code className="block bg-gray-800 p-2 rounded text-green-400 mb-2">
                      {step.command}
                    </code>
                    <p className="text-gray-300 text-sm">{step.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        <div className="mt-8 flex justify-between">
          <button
            onClick={handlePreviousSection}
            disabled={content.sections[0].id === section.id}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous Section
          </button>
          <button
            onClick={handleNextSection}
            disabled={content.sections[content.sections.length - 1].id === section.id}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next Section
          </button>
        </div>
      </div>
    </div>
  );
};
