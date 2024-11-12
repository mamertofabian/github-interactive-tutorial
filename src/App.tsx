import { Layout } from './components/core/Layout';
import { TutorialProvider } from './contexts/TutorialContext';
import { TutorialContainer } from './components/core/TutorialContainer';

function App() {
  return (
    <TutorialProvider>
      <Layout>
        <TutorialContainer />
      </Layout>
    </TutorialProvider>
  );
}

export default App;
