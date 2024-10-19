import React, { useState } from 'react'

const FirstRepository: React.FC = () => {
  const [showTerminal, setShowTerminal] = useState(false)
  const [terminalOutput, setTerminalOutput] = useState<string[]>([])

  const runCommand = (command: string) => {
    let output: string[] = []
    switch (command) {
      case 'git init':
        output = ['Initialized empty Git repository in /path/to/your/project/.git/']
        break
      case 'git status':
        output = [
          'On branch master',
          '',
          'No commits yet',
          '',
          'nothing to commit (create/copy files and use "git add" to track)'
        ]
        break
      case 'git add .':
        output = []
        break
      case 'git commit -m "Initial commit"':
        output = [
          '[master (root-commit) f7d1e1d] Initial commit',
          ' 1 file changed, 1 insertion(+)',
          ' create mode 100644 README.md'
        ]
        break
      default:
        output = [`Command not recognized: ${command}`]
    }
    setTerminalOutput(prev => [...prev, `$ ${command}`, ...output, ''])
  }

  return (
    <div className="first-repository">
      <h1>Creating Your First Repository</h1>
      <p>Learn how to create and initialize your first Git repository.</p>

      <h2>Steps for Creating a New Repository</h2>
      <ol>
        <li>Open your terminal or command prompt.</li>
        <li>Navigate to the directory where you want to create your project.</li>
        <li>Run the command <code>git init</code> to initialize a new Git repository.</li>
        <li>Create or add your project files to this directory.</li>
        <li>Use <code>git add</code> to stage your files for commit.</li>
        <li>Use <code>git commit</code> to create your first commit.</li>
      </ol>

      <h2>Basic Git Commands</h2>
      <ul>
        <li><code>git init</code>: Initialize a new Git repository</li>
        <li><code>git status</code>: Check the status of your repository</li>
        <li><code>git add &lt;file&gt;</code>: Add a file to the staging area</li>
        <li><code>git add .</code>: Add all changed files to the staging area</li>
        <li><code>git commit -m "Your message"</code>: Commit staged changes with a message</li>
        <li><code>git log</code>: View commit history</li>
      </ul>

      <h2>Interactive Terminal</h2>
      <button onClick={() => setShowTerminal(!showTerminal)}>
        {showTerminal ? 'Hide Terminal' : 'Show Terminal'}
      </button>
      {showTerminal && (
        <div className="terminal">
          <div className="terminal-output">
            {terminalOutput.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <div className="terminal-input">
            <span>$</span>
            <input
              type="text"
              placeholder="Enter Git command"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  runCommand(e.currentTarget.value)
                  e.currentTarget.value = ''
                }
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default FirstRepository