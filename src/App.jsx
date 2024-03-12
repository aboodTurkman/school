import { Outlet } from 'react-router-dom';
import './App.css'
import HomeFooter from './components/Footers/HomeFooter';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/Navs/HomeNavbar';
function App() {

  return (
    <>
 <HomeNavbar/>
   <Outlet />
   <HomeFooter/>
    </>
  )
}

export default App
