import React from 'react';
import { Layout } from './components/core/Layout';
import { LessonCard } from './components/interactive/LessonCard';
import { InteractiveTerminal } from './components/interactive/InteractiveTerminal';
import { VisualizationContainer } from './components/interactive/VisualizationContainer';
import { GitTimeline } from './components/interactive/GitTimeline';
import { BranchVisualizer } from './components/interactive/BranchVisualizer';
import { CommitFlow } from './components/interactive/CommitFlow';

const sampleCommits = [
  {
    id: '1234567890abcdef',
    message: 'Initial commit',
    author: 'John Doe',
    timestamp: '2 hours ago',
  },
  {
    id: 'abcdef1234567890',
    message: 'Add README.md',
    author: 'Jane Smith',
    timestamp: '1 hour ago',
  },
];

const sampleBranches = [
  { name: 'main', commits: ['1', '2', '3'], isActive: true },
  { name: 'feature', commits: ['1', '2'], isActive: false },
];

const commitStages = [
  {
    name: 'Working Directory',
    description: 'Make changes to your files',
    isComplete: true,
  },
  {
    name: 'Staging Area',
    description: 'Stage your changes',
    isComplete: false,
  },
  {
    name: 'Repository',
    description: 'Commit your changes',
    isComplete: false,
  },
];

function App() {
  return (
    <Layout>
      <div className="space-y-8">
        <LessonCard
          title="Introduction to Git"
          description="Learn the basics of version control with Git"
          duration="30 mins"
          difficulty="beginner"
        />

        <InteractiveTerminal
          onCommandSubmit={(command) => console.log('Command:', command)}
        />

        <VisualizationContainer title="Git History">
          <GitTimeline commits={sampleCommits} />
        </VisualizationContainer>

        <div className="grid grid-cols-2 gap-6">
          <BranchVisualizer
            branches={sampleBranches}
            onBranchSelect={(branch) => console.log('Selected branch:', branch)}
          />
          <CommitFlow stages={commitStages} currentStage={1} />
        </div>
      </div>
    </Layout>
  );
}

export default App;