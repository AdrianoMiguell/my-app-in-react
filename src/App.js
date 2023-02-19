
// import styles from "./components/css/Style.module.css";
// import Pessoa from './components/Pessoa.js';
// import Evento from "./components/Evento.js";
// import Form from "./components/Form.js";
// import OutraLista from "./components/OutraLista.js";
// import Condicional from "./components/Condicional";

import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import SeuNome from './components/SeuNome';
import Saudacao from './components/Saudacao';

function App() {
  // const meusItems = ['React', 'Vue', 'Angular']

  const [nome, setNome] = useState()
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> 
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="m-5 d-grid gap-2">
        {/* <p className={styles.textDecoration} > A primeira pessoa da lista: <Pessoa nome = "Adriano" idade = "25" profissao = "Programador" foto = "https://miro.medium.com/max/1400/1*g09N-jl7JtVjVZGcd-vL2g.jpeg"/> </p>

        <Evento/>
        <Form/>
        <Condicional/> */}

        {/* <div className='m-5'>
          <OutraLista item={meusItems}/>
          <OutraLista item={[]}/>
        </div> */}

        <h2>State Lift</h2>
        <SeuNome setNome={setNome}/>
        <Saudacao nome={nome}/>
      </section>
    </div>
  );
}

export default App;
