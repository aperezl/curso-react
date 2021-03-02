import './App.css'

import logo from './logo.svg'

function App() {
  const nombre = 'Test'
  const auth = true
  const estaciones = ['Primeravera', 'Verano', 'Otoño', 'Invierno']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1>{nombre}</h1>
        <p> { auth ? 'user is validated' : 'user is not validated' }</p>
        <p>{ 1 + 2 } </p>
        <ul>
          {estaciones.map((el, index) => (
            <li key={index}>{el}</li>  
          ))}
        </ul>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
