import React from 'react';
import { Layout } from './components/core/Layout';

function App() {
  return (
    <Layout>
      <div className="text-white">
        <h1 className="text-3xl font-bold mb-4">Welcome to Git Tutorial</h1>
        <p className="text-gray-300">
          Learn Git from basics to advanced concepts with interactive lessons.
        </p>
      </div>
    </Layout>
  );
}

export default App;