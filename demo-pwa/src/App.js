import React, { useState } from 'react';
import CellModel from './components/CellModel';
import MultiParameterEndpoint from './components/MultiParameterEndpoint';
import GeneEditing from './components/GeneEditing';
import Collaboration from './components/Collaboration';
import Presentation from './components/Presentation';
import './App.css';

function App() {
  const [activeModule, setActiveModule] = useState('cellModel');

  return (
    <div className="App">
      <h1>Demo PWA for Cellular Models and Gene Editing</h1>
      <nav>
        <button onClick={() => setActiveModule('cellModel')}>Cell Models</button>
        <button onClick={() => setActiveModule('multiEndpoint')}>Multi-Parameter Endpoints</button>
        <button onClick={() => setActiveModule('geneEditing')}>Gene Editing</button>
        <button onClick={() => setActiveModule('collaboration')}>Collaboration</button>
        <button onClick={() => setActiveModule('presentation')}>Presentation</button>
      </nav>
      {activeModule === 'cellModel' && <CellModel />}
      {activeModule === 'multiEndpoint' && <MultiParameterEndpoint />}
      {activeModule === 'geneEditing' && <GeneEditing />}
      {activeModule === 'collaboration' && <Collaboration />}
      {activeModule === 'presentation' && <Presentation />}
    </div>
  );
}

export default App;