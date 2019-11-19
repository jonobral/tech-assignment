import React from 'react';
import './App.css';
import Filter from '../Filter/Filter';
import InputBox from '../InputBox/InputBox';
import ResultBox from '../ResultBox/ResultBox';
import Highlighter from '../Highlighter/Highlighter';

function App() {
  return (
    <div className="App">
      <header className="App-header disable-select">
        <p>
          Tech Assignment
        </p>
      </header>
      <main className="App-content">
        <Highlighter componentType="highlighter" text="Press a color to hightlight the selected text below"/>
        <InputBox />
        <Filter componentType="filter" text="Click to filter the text highlighted above" />
        <ResultBox />
      </main>
      <footer className="App-footer">
        <p>
          Jonathan Obregon
        </p>
      </footer>
    </div>
  );
}

export default App;
