import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/introduction">Introduction</Link></li>
          <li><Link to="/setup">Setup</Link></li>
          <li><Link to="/first-repository">First Repository</Link></li>
          <li><Link to="/git-workflow">Git Workflow</Link></li>
          <li><Link to="/branching-merging">Branching & Merging</Link></li>
          <li><Link to="/merge-conflicts">Merge Conflicts</Link></li>
          <li><Link to="/remote-repositories">Remote Repositories</Link></li>
          <li><Link to="/collaboration">Collaboration</Link></li>
          <li><Link to="/project-management">Project Management</Link></li>
          <li><Link to="/undoing-changes">Undoing Changes</Link></li>
          <li><Link to="/advanced-techniques">Advanced Techniques</Link></li>
          <li><Link to="/best-practices">Best Practices</Link></li>
          <li><Link to="/continuous-integration">Continuous Integration</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header