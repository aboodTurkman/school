import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,

} from "react-router-dom";
import "./index.css";
import Teachers from './modules/teachers/pages/Teachers';
import Students from './modules/students/pages/Students';
import GuerdedRoutes from './routes/GuerdedRoutes';
import Main from './modules/main/pages/Main';

const isAuthenticated = localStorage.getItem('user')
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='/teachers' element={
        <GuerdedRoutes isAccessable={isAuthenticated} OnSuccess={() => { <Teachers /> }} />

      }></Route>
      <Route path='/Students' element={<GuerdedRoutes isAccessable={isAuthenticated} OnSuccess={() => { <Students /> }} />
      }></Route>
      <Route path='' element={<Main/>}></Route>
    </Route>

  )
)
// const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
);

