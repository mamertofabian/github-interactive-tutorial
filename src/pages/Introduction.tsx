import React, { useState } from 'react'
import VersionControlTimeline from '../components/VersionControlTimeline'
import ScenarioSimulator from '../components/ScenarioSimulator'

const Introduction: React.FC = () => {
  const [showScenario, setShowScenario] = useState(false)

  return (
    <div className="introduction">
      <h1>Introduction to Version Control and Git</h1>
      <h2>What is Version Control?</h2>
      <p>Version control is a system that helps track and manage changes to files over time. It allows multiple people to work on the same project simultaneously, keeping a record of who made what changes and when.</p>
      
      <h2>The Evolution of Version Control Systems</h2>
      <VersionControlTimeline />
      
      <h2>Benefits of Using Git</h2>
      <ul>
        <li>Track changes over time</li>
        <li>Collaborate with others</li>
        <li>Experiment with new features without affecting the main codebase</li>
        <li>Revert to previous versions if needed</li>
        <li>Work offline and sync later</li>
      </ul>
      
      <h2>Interactive Scenario</h2>
      <button onClick={() => setShowScenario(!showScenario)}>
        {showScenario ? 'Hide Scenario' : 'Show Scenario'}
      </button>
      {showScenario && <ScenarioSimulator />}
    </div>
  )
}

export default Introduction