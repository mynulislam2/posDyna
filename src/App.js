import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes/AllRoutes';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
