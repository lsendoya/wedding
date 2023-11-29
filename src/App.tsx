import { useState, useEffect } from 'react';
import Heartbeat from './component/Heartbeat';
import Main from './component/Main';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<'heartbeat' | 'main'>(
    'heartbeat',
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentView('main');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {currentView === 'heartbeat' && <Heartbeat />}
      {currentView !== 'heartbeat' && <Main />}
    </>
  );
}

export default App;
