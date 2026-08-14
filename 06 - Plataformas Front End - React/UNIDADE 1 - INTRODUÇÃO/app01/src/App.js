
import './App.css';
import { Header } from './components/Header';
import { SkillsList } from './components/SkillsList';

function App() {
  return (
    <div className="App">
      <Header firstName="Pedro" />
      <SkillsList skills={['HTML', 'CSS', 'JavaScript', 'React']} />
    </div>
  );
}

export default App;
