import React from 'react'
import './App.css';
import Home from './components/Home'
import NavBar from './components/NavBar'

function App() {
  /*
  /const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  /*
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );*/
  return(
    <>
      <Home/>
    </>
  )
}

export default App;
