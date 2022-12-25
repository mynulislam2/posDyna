import React from 'react';
// import '../css/app.css'
import '/resources/css/app.css'
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import AllRoutes from './AllRoutes/AllRoutes';



ReactDOM.createRoot(document.getElementById('app')).render(

     <BrowserRouter>
        <AllRoutes/>
      </BrowserRouter>
);



