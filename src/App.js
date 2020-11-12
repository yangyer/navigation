import './App.css';

const App = ({
  onNavClick
}) => {
  const routes = [{
    title: 'route 1'
  }]
  return (
    <button onClick={() => onNavClick('from nav bar')}>click me</button>
    // <div>
    //   <ul>
    //     {routes && routes
    //       .forEach(r => (
    //         <li onClick={() => onNavClick(`${r.title} was clicked`)}>r.title</li>
    //       ))}
    //   </ul>
    // </div>
  )
}

export default App;
