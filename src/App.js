import React from 'react'
import './App.css'
import TableContainer from './containers/tableContainer/tableContainer'
import ToolsPannelContainer from './containers/toolsPanelContainer/toolsPanelContainer'

function App({location}) {
  return (
    <div className="wrapper">
      <header>
        <h1>DataGrid project</h1>
      </header>
      <main>
        <ToolsPannelContainer locationSearch={location.search}/>
        <TableContainer />
      </main>
    </div>
  );
}

export default App;
