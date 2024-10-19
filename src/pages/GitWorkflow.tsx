import React, { useState } from 'react'
import WorkflowVisualization from '../components/WorkflowVisualization'
import WorkflowExplanation from '../components/WorkflowExplanation'

const GitWorkflow: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<'working' | 'staging' | 'repository'>('working')

  return (
    <div className="git-workflow">
      <h1>Understanding the Git Workflow</h1>
      <p>Explore the basic Git workflow and learn about staging, committing, and pushing changes.</p>
      
      <WorkflowVisualization currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <WorkflowExplanation currentStep={currentStep} />
      
      <h2>Key Git Commands</h2>
      <ul>
        <li><code>git status</code>: Check the status of your working directory and staging area</li>
        <li><code>git add &lt;file&gt;</code>: Add changes to the staging area</li>
        <li><code>git commit -m "message"</code>: Commit staged changes to the repository</li>
        <li><code>git log</code>: View commit history</li>
      </ul>
    </div>
  )
}

export default GitWorkflow