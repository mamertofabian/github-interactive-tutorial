# Component Architecture for GitHub Tutorial

## Core Layout Components
- `Layout`
  - Main layout wrapper with navigation and progress tracking
- `TutorialContainer`
  - Manages tutorial state and progression
- `NavigationBar`
  - Tutorial navigation and progress indicators
- `ProgressTracker`
  - Visual indicator of completion status

## Interactive Tutorial Components
- `LessonCard`
  - Reusable component for each lesson section
- `InteractiveTerminal`
  - Simulated terminal for Git commands
- `VisualizationContainer`
  - Wrapper for all visualization components
- `GitTimeline`
  - Visual representation of Git history
- `BranchVisualizer`
  - Interactive branch visualization
- `CommitFlow`
  - Animated commit process visualization

## Visualization Components
- `AnimatedDiagram`
  - Base component for all animated diagrams
- `ComparisonView`
  - Side-by-side comparison visualizer
- `FlowChart`
  - Reusable flowchart component
- `ProcessAnimation`
  - Animated process demonstrations

## Interactive Elements
- `CommandExecutor`
  - Interactive command input and execution
- `ConflictResolver`
  - Interactive merge conflict resolution
- `BranchingSimulator`
  - Interactive branching practice
- `PullRequestDemo`
  - Interactive PR creation and review

## Challenge Components
- `ChallengeContainer`
  - Wrapper for challenge sections
- `Timer`
  - Challenge countdown timer
- `ValidationChecker`
  - Validates challenge completion
- `FeedbackDisplay`
  - Shows success/error messages

## Educational Components
- `ConceptCard`
  - Reusable component for explaining concepts
- `TermDefinition`
  - Tooltip-style definition display
- `ExampleCode`
  - Syntax-highlighted code examples
- `StepGuide`
  - Step-by-step instruction display

## UI Components
- `Button`
  - Custom styled buttons
- `ProgressBar`
  - Visual progress indicator
- `Modal`
  - Reusable modal dialog
- `Tooltip`
  - Context-sensitive help tooltips
- `Alert`
  - Success/error/info messages

## State Management
- `TutorialContext`
  - Global tutorial state context
- `ProgressContext`
  - Progress tracking context
- `UserContext`
  - User preferences and progress

## Utility Components
- `ErrorBoundary`
  - Error handling wrapper
- `LoadingSpinner`
  - Loading state indicator
- `Suspense`
  - Lazy loading wrapper
- `Analytics`
  - Usage tracking component

## Proposed File Structure
```
src/
├── components/
│   ├── core/
│   ├── interactive/
│   ├── visualization/
│   ├── challenges/
│   ├── educational/
│   └── ui/
├── contexts/
├── hooks/
├── utils/
└── pages/
```

## Component Properties and Interfaces

### Core Properties
- All interactive components should accept:
  - `onComplete`: Callback for completion
  - `difficulty`: Difficulty level
  - `currentStep`: Current tutorial step
  - `isInteractive`: Toggle for interactive mode

### Shared Interfaces
```typescript
interface TutorialStep {
  id: string;
  title: string;
  description: string;
  type: 'concept' | 'interactive' | 'challenge';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  timeEstimate: number;
  dependencies?: string[];
}

interface VisualizationProps {
  animationSpeed: number;
  showControls: boolean;
  autoPlay: boolean;
  loop: boolean;
}

interface ChallengeProps {
  timeLimit?: number;
  successCriteria: Array<(result: any) => boolean>;
  hints: string[];
  solution?: string;
}
```
