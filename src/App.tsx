import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Introduction from './pages/Introduction'
import Setup from './pages/Setup'
import FirstRepository from './pages/FirstRepository'
import GitWorkflow from './pages/GitWorkflow'
import BranchingMerging from './pages/BranchingMerging'
import MergeConflicts from './pages/MergeConflicts'
import RemoteRepositories from './pages/RemoteRepositories'
import Collaboration from './pages/Collaboration'
import ProjectManagement from './pages/ProjectManagement'
import UndoingChanges from './pages/UndoingChanges'
import AdvancedTechniques from './pages/AdvancedTechniques'
import BestPractices from './pages/BestPractices'
import ContinuousIntegration from './pages/ContinuousIntegration'

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/setup" element={<Setup />} />
            <Route path="/first-repository" element={<FirstRepository />} />
            <Route path="/git-workflow" element={<GitWorkflow />} />
            <Route path="/branching-merging" element={<BranchingMerging />} />
            <Route path="/merge-conflicts" element={<MergeConflicts />} />
            <Route path="/remote-repositories" element={<RemoteRepositories />} />
            <Route path="/collaboration" element={<Collaboration />} />
            <Route path="/project-management" element={<ProjectManagement />} />
            <Route path="/undoing-changes" element={<UndoingChanges />} />
            <Route path="/advanced-techniques" element={<AdvancedTechniques />} />
            <Route path="/best-practices" element={<BestPractices />} />
            <Route path="/continuous-integration" element={<ContinuousIntegration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App