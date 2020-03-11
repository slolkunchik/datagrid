import React from 'react';
import './App.css';
import TableContainer from './containers/tableContainer/tableContainer'
import SearchPannelContainer from './containers/searchPanelContainer/searchPanelContainer'

function App() {
  return (
    <>
      <header>
        <h1>DataGrid project</h1>
      </header>
      <main>
        <SearchPannelContainer />
        <TableContainer />
      </main>
    </>
  );
}

export default App;
