import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <div className="home">
      <h1>Git and GitHub for Beginners: An Interactive and Visual Tutorial</h1>
      <p>Welcome to our comprehensive, beginner-friendly introduction to Git and GitHub. This interactive tutorial uses simulations and visualizations to demystify complex concepts.</p>
      <h2>Table of Contents</h2>
      <ol>
        <li><Link to="/introduction">Introduction to Version Control and Git</Link></li>
        <li><Link to="/setup">Setting Up Git</Link></li>
        <li><Link to="/first-repository">Creating Your First Repository</Link></li>
        <li><Link to="/git-workflow">Understanding the Git Workflow</Link></li>
        <li><Link to="/branching-merging">Branching and Merging</Link></li>
        <li><Link to="/merge-conflicts">Resolving Merge Conflicts</Link></li>
        <li><Link to="/remote-repositories">Working with Remote Repositories</Link></li>
        <li><Link to="/collaboration">Collaborating on GitHub</Link></li>
        <li><Link to="/project-management">GitHub Issues and Project Management</Link></li>
        <li><Link to="/undoing-changes">Undoing Changes and History Manipulation</Link></li>
        <li><Link to="/advanced-techniques">Advanced Git Techniques</Link></li>
        <li><Link to="/best-practices">Best Practices and Tips</Link></li>
        <li><Link to="/continuous-integration">Continuous Integration with GitHub Actions</Link></li>
      </ol>
    </div>
  )
}

export default Home