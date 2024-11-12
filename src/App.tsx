import React from 'react';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-900">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;