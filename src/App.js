
import { LayoutGroup } from 'framer-motion';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Dashboard from './Components/pages/Dashboard/Dashboard';
import Layout from './Components/Layout/Layout';
import Calendar from './Components/pages/Calendar/Calendar';
import Boards from './Components/pages/Board/Boards';



function App() {
  return (
    <div id="dashboard">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route  path='Dashboard' element={<Dashboard/>}></Route>
        <Route path="/Calender" element={<Calendar />}></Route>
        <Route path="/Board" element={<Boards/>}></Route>

        </Route>


      </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
