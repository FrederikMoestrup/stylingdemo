import React from 'react';
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
//import './index.css'
import App from './App.jsx'
import About from './pages/About.jsx';
import Error404Page from './pages/Error404Page.jsx';
import ErrorProvoker from './pages/ErrorProvoker.jsx';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}> 
    <Route path="about" element={<About/>} />
    <Route path="*" element={<Error404Page/>} />
    <Route path="/error" element={<ErrorProvoker/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);