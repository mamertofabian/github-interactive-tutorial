import React from 'react'

interface WorkflowVisualizationProps {
  currentStep: 'working' | 'staging' | 'repository'
  setCurrentStep: React.Dispatch<React.SetStateAction<'working' | 'staging' | 'repository'>>
}

const WorkflowVisualization: React.FC<WorkflowVisualizationProps> = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="workflow-visualization">
      <h2>Git Workflow Visualization</h2>
      <div className="workflow-container">
        <div
          className={`workflow-step ${currentStep === 'working' ? 'active' : ''}`}
          onClick={() => setCurrentStep('working')}
        >
          Working Directory
        </div>
        <div className="workflow-arrow">→</div>
        <div
          className={`workflow-step ${currentStep === 'staging' ? 'active' : ''}`}
          onClick={() => setCurrentStep('staging')}
        >
          Staging Area
        </div>
        <div className="workflow-arrow">→</div>
        <div
          className={`workflow-step ${currentStep === 'repository' ? 'active' : ''}`}
          onClick={() => setCurrentStep('repository')}
        >
          Repository
        </div>
      </div>
      <p>Click on each step to learn more about it.</p>
    </div>
  )
}

export default WorkflowVisualization