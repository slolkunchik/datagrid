import React from 'react';
import './App.css';
import TableContainer from './containers/tableContainer/tableContainer'
import SearchPannelContainer from './containers/searchPanelContainer/searchPanelContainer'

function App() {
  return (
    <div className='wrapper'>
      <header>
        <h1>DataGrid project</h1>
      </header>
      <main>
        <SearchPannelContainer />
        <TableContainer />
      </main>
    </div>
  );
}

export default App;
