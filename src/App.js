import React from 'react';
import './App.css';
import TableContainer from './containers/tableContainer/tableContainer'
import ToolsPannelContainer from './containers/toolsPanelContainer/toolsPanelContainer'

function App() {
  return (
    <div className="wrapper">
      <header>
        <h1>DataGrid project</h1>
      </header>
      <main>
        <ToolsPannelContainer />
        <TableContainer />
      </main>
    </div>
  );
}

export default App;
