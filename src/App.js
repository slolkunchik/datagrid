import React from 'react';
import './App.css';
import TableContainer from './containers/tableContainer/tableContainer'
import SearchPannelContainer from './containers/searchPannelContainer/searchPannelContainer'

function App() {
  return (
    <>
      <SearchPannelContainer />
      <TableContainer />
    </>
  );
}

export default App;
