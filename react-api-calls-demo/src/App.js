import React from 'react';
import './App.css';

function App() {

  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1);

  React.useEffect(() => {
    fetch(`https://swapi.py4e.com/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count]);

  const handleClick = (prevCount) => {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div className="App">
      <h2>The count is {count}</h2>
      <button onClick={handleClick}>Get next character</button>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  );
}

export default App;