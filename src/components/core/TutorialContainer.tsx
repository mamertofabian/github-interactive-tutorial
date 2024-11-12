import React from 'react';
import { useTutorialContext } from '../../contexts/TutorialContext';
import { ConceptCard } from '../educational/ConceptCard';
import { TermDefinition } from '../educational/TermDefinition';
import { StepGuide } from '../educational/StepGuide';
import { ChallengeContainer } from '../challenges/ChallengeContainer';

export const TutorialContainer: React.FC = () => {
  const { content, currentSection, setCurrentSection, getSectionById, updateProgress } = useTutorialContext();
  const section = currentSection ? getSectionById(currentSection) : content.sections[0];

  if (!section) return null;

  const handleNextSection = () => {
    const currentIndex = content.sections.findIndex(s => s.id === section.id);
    if (currentIndex < content.sections.length - 1) {
      updateProgress(section.id);
      setCurrentSection(content.sections[currentIndex + 1].id);
    }
  };

  const handlePreviousSection = () => {
    const currentIndex = content.sections.findIndex(s => s.id === section.id);
    if (currentIndex > 0) {
      setCurrentSection(content.sections[currentIndex - 1].id);
    }
  };

  const handleChallengeComplete = () => {
    updateProgress(section.id);
    handleNextSection();
  };

  return (
    <div className="p-6 bg-gray-800 rounded-lg m-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
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

        {section.content.features && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Features</h3>
            {section.content.features.map((feature, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <h4 className="text-white font-medium text-lg mb-3">{feature.title}</h4>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                {feature.examples && (
                  <div className="space-y-4">
                    {feature.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="bg-gray-600 p-4 rounded-lg">
                        {example.type && (
                          <h5 className="text-blue-400 font-medium mb-3">{example.type}</h5>
                        )}
                        {example.template && (
                          <div className="space-y-2">
                            <p className="text-white font-medium">{example.template.title}</p>
                            <p className="text-gray-300">{example.template.description}</p>
                            {example.template.steps && (
                              <ul className="list-disc list-inside text-gray-300 ml-4">
                                {example.template.steps.map((step, stepIndex) => (
                                  <li key={stepIndex}>{step}</li>
                                ))}
                              </ul>
                            )}
                            {example.template.labels && (
                              <div className="flex gap-2 mt-2">
                                {example.template.labels.map((label, labelIndex) => (
                                  <span key={labelIndex} className="px-2 py-1 bg-gray-700 rounded text-sm text-blue-400">
                                    {label}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                        {example.columns && (
                          <div className="grid grid-cols-3 gap-4">
                            {example.columns.map((column, columnIndex) => (
                              <div key={columnIndex} className="bg-gray-700 p-3 rounded">
                                <h6 className="text-white font-medium mb-2">{column.name}</h6>
                                <ul className="space-y-2">
                                  {column.items.map((item, itemIndex) => (
                                    <li key={itemIndex} className="text-gray-300 text-sm">{item}</li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {section.content.challenges && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Interactive Challenges</h3>
            {section.content.challenges.map((challenge, index) => (
              <ChallengeContainer
                key={index}
                challenge={challenge}
                onComplete={handleChallengeComplete}
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
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Practice</h3>
            <div className="bg-gray-700 p-4 rounded-lg">
              {section.content.practice.title && (
                <h4 className="text-white font-medium mb-4">{section.content.practice.title}</h4>
              )}
              <div className="space-y-4">
                {section.content.practice.steps.map((step, index) => (
                  <div key={index} className="bg-gray-600 p-4 rounded">
                    <p className="text-white font-medium mb-2">{step.action}</p>
                    {step.command && (
                      <code className="block bg-gray-800 p-2 rounded text-green-400 mb-2">
                        {step.command}
                      </code>
                    )}
                    <p className="text-gray-300 text-sm">{step.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section.content.commands && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Useful Commands</h3>
            <div className="space-y-4">
              {section.content.commands.map((command, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <code className="block bg-gray-800 p-2 rounded text-green-400 mb-2">
                    {command.command}
                  </code>
                  <p className="text-gray-300 mb-2">{command.description}</p>
                  <div className="bg-gray-600 p-2 rounded">
                    <p className="text-sm text-gray-300">Example:</p>
                    <code className="text-green-400 text-sm">{command.example}</code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section.content.bestPractices && (
          <div className="space-y-6 mb-8">
            <h3 className="text-lg font-semibold text-white">Best Practices</h3>
            <div className="space-y-4">
              {section.content.bestPractices.map((practice, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-white font-medium mb-3">{practice.title}</h4>
                  <ul className="space-y-2">
                    {practice.guidelines.map((guideline, guidelineIndex) => (
                      <li key={guidelineIndex} className="flex items-start text-gray-300">
                        <span className="text-blue-400 mr-2">•</span>
                        {guideline}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
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
