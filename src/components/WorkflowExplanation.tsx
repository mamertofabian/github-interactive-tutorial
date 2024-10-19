import React from 'react'

interface WorkflowExplanationProps {
  currentStep: 'working' | 'staging' | 'repository'
}

const WorkflowExplanation: React.FC<WorkflowExplanationProps> = ({ currentStep }) => {
  const explanations = {
    working: (
      <>
        <h3>Working Directory</h3>
        <p>The working directory is where you make changes to your files. These changes are not yet tracked by Git.</p>
        <ul>
          <li>Create, edit, or delete files in this area</li>
          <li>Use <code>git status</code> to see which files have been modified</li>
          <li>Changes here are not yet saved in Git's history</li>
        </ul>
      </>
    ),
    staging: (
      <>
        <h3>Staging Area</h3>
        <p>The staging area is where you prepare changes for a commit. It's like a "pre-commit" holding area.</p>
        <ul>
          <li>Use <code>git add &lt;file&gt;</code> to stage changes</li>
          <li>You can stage specific files or all changes at once</li>
          <li>Staged changes are ready to be committed</li>
        </ul>
      </>
    ),
    repository: (
      <>
        <h3>Repository</h3>
        <p>The repository is where Git permanently stores changes as commits. Each commit is a snapshot of your project.</p>
        <ul>
          <li>Use <code>git commit -m "message"</code> to create a new commit</li>
          <li>Commits are saved in the project's history</li>
          <li>You can view the commit history with <code>git log</code></li>
        </ul>
      </>
    ),
  }

  return (
    <div className="workflow-explanation">
      {explanations[currentStep]}
    </div>
  )
}

export default WorkflowExplanation