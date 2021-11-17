import css from './App.module.css';
import Menu from './Components/Menu';
import Home from './pages/Home';

function App() {
  return (
    <div className={css.main}>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
