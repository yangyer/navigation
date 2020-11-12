import './App.css';

const App = ({
  onNavClick
}) => {
  return (
    <button onClick={() => onNavClick('from nav bar')}>click me</button>
  )
}

export default App;
