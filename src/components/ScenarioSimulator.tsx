import React, { useState } from 'react'

interface File {
  name: string
  content: string
}

const ScenarioSimulator: React.FC = () => {
  const [files, setFiles] = useState<File[]>([
    { name: 'index.html', content: '<h1>Welcome to my website</h1>' },
    { name: 'styles.css', content: 'body { font-family: Arial, sans-serif; }' },
  ])
  const [currentUser, setCurrentUser] = useState('User A')
  const [conflict, setConflict] = useState(false)

  const editFile = (index: number, newContent: string) => {
    const newFiles = [...files]
    newFiles[index].content = newContent
    setFiles(newFiles)
    if (currentUser === 'User B' && index === 0) {
      setConflict(true)
    }
  }

  const resolveConflict = () => {
    const newFiles = [...files]
    newFiles[0].content = '<h1>Welcome to our collaborative website</h1>'
    setFiles(newFiles)
    setConflict(false)
  }

  return (
    <div className="scenario-simulator">
      <h3>Scenario: Two users editing the same project</h3>
      <button onClick={() => setCurrentUser(currentUser === 'User A' ? 'User B' : 'User A')}>
        Switch to {currentUser === 'User A' ? 'User B' : 'User A'}
      </button>
      <p>Current user: {currentUser}</p>
      {files.map((file, index) => (
        <div key={file.name}>
          <h4>{file.name}</h4>
          <textarea
            value={file.content}
            onChange={(e) => editFile(index, e.target.value)}
            rows={5}
            cols={50}
          />
        </div>
      ))}
      {conflict && (
        <div className="conflict-warning">
          <p>Conflict detected! User B has modified the same file.</p>
          <button onClick={resolveConflict}>Resolve Conflict</button>
        </div>
      )}
    </div>
  )
}

export default ScenarioSimulator