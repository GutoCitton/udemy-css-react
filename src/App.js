import './App.css';
import MyComponent from './components/MyComponent';
import { useState } from 'react'
import Title from './components/Title';

function App() {

  const n = 15;
  const [name] = useState('Augusto');

  const redTitle = true;

  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>React com CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>Esse parágrafo é do App.js</p>
      {/* INLINE CSS */}
      <p style={{color: 'blue', padding: '25px', borderTop: '2px solid red'}}>
        Esse elemento foi estilizado de forma inline
      </p>
      <p style={{color: 'magenta', padding: '25px', borderTop: '2px solid red'}}>
        Esse elemento foi estilizado de forma inline
      </p>
      {/* CSS INLINE DINÂMICO */}
      <h2 style={n < 10 ? ({color: 'purple'}) : ({color: 'pink'})}>
      CSS dinâmico
      </h2>
      <h2 style={n > 10 ? ({color: 'purple'}) : ({color: 'pink'})}>
      CSS dinâmico
      </h2>
      <h2 style={name === 'Augusto' ? ({color: 'green', backgroundColor: '#000'}) : (null)}>
      Teste nome
      </h2>
      {/* CLASSE DINÂMICA */}
      <h2 className= {redTitle ? 'red-title' : 'title'}>
        Este título vai ter classe dinâmica
      </h2>
      {/* CSS MODULES */}
      <Title />
    </div>
  );
}

export default App;
