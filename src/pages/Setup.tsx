import React, { useState } from 'react'

const Setup: React.FC = () => {
  const [os, setOs] = useState<'windows' | 'mac' | 'linux' | null>(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const renderInstallationInstructions = () => {
    switch (os) {
      case 'windows':
        return (
          <ol>
            <li>Go to the official Git website: <a href="https://git-scm.com/download/win" target="_blank" rel="noopener noreferrer">https://git-scm.com/download/win</a></li>
            <li>Download the latest version for Windows</li>
            <li>Run the installer and follow the installation wizard</li>
            <li>Choose the default options unless you have specific preferences</li>
            <li>After installation, open Command Prompt or Git Bash to verify the installation by typing: <code>git --version</code></li>
          </ol>
        )
      case 'mac':
        return (
          <ol>
            <li>Open Terminal</li>
            <li>Install Homebrew if you haven't already: <code>/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code></li>
            <li>Install Git using Homebrew: <code>brew install git</code></li>
            <li>Verify the installation by typing: <code>git --version</code></li>
          </ol>
        )
      case 'linux':
        return (
          <ol>
            <li>Open Terminal</li>
            <li>For Ubuntu or Debian-based distributions, type: <code>sudo apt-get update</code> followed by <code>sudo apt-get install git</code></li>
            <li>For Fedora, type: <code>sudo dnf install git</code></li>
            <li>Verify the installation by typing: <code>git --version</code></li>
          </ol>
        )
      default:
        return null
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Git configuration set:\nName: ${name}\nEmail: ${email}`)
  }

  return (
    <div className="setup">
      <h1>Setting Up Git</h1>
      <p>This page will guide you through the process of installing and configuring Git on your system.</p>
      
      <h2>1. Installation</h2>
      <p>Select your operating system:</p>
      <div>
        <button onClick={() => setOs('windows')}>Windows</button>
        <button onClick={() => setOs('mac')}>macOS</button>
        <button onClick={() => setOs('linux')}>Linux</button>
      </div>
      {renderInstallationInstructions()}
      
      <h2>2. Configuration</h2>
      <p>After installing Git, you need to set up your identity. This information will be used in your commit messages.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Set Configuration</button>
      </form>
      
      <h3>Configuration Commands</h3>
      <p>To set your Git configuration, use these commands in your terminal:</p>
      <pre>
        <code>
          git config --global user.name "{name}"
          git config --global user.email "{email}"
        </code>
      </pre>
      
      <h2>3. Verifying Your Installation</h2>
      <p>To verify that Git is installed and configured correctly, open your terminal or command prompt and run the following commands:</p>
      <pre>
        <code>
          git --version
          git config --list
        </code>
      </pre>
      <p>The first command will display the installed Git version, and the second will show your Git configuration settings.</p>
    </div>
  )
}

export default Setup