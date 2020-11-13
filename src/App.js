import './App.css';

const App = ({
  routes,
  onNavClick
}) => {
  return (
    <div>
      <h1>Navigation</h1>
      <div>
        {routes && routes
          .map(r => (
            <button onClick={() => onNavClick(r)}>{r.displayText}</button>
          ))}
      </div>
    </div>
  )
}

export default App;
