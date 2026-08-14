
import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SkillsList } from './components/SkillsList';

function App() {

  const [loading, setLoading] = useState(false);
  console.log("Renderizando App...");

  return (
    <div className="App">
      <Header firstName="Pedro" />
      <SkillsList skills={['HTML', 'CSS', 'JavaScript', 'React']} />
      <button onClick={() => setLoading(true)}>{loading ? 'Loading...' : 'Load Skills'}</button>
    </div>
  );
}

export default App;
