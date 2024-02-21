
import './App.css';
import Login from './login/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './login/Register';
import Home from './home/Home';
import Nadiad from './pages/Nadiad';
import Containcard from './pages/Containcard';
import Booking from './pages/Booking';
import Ahmdabad from './pages/Ahmdabad';
import Surat from './pages/Surat';
import Vadodra from './pages/Vadodra';


function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/nadiad' element={<Nadiad/>}></Route>
      <Route path='/ahmdabad' element={<Ahmdabad/>}></Route>
      <Route path='/surat' element={<Surat/>}></Route>
      <Route path='/vadodra' element={<Vadodra/>}></Route>
      <Route path='/containcard' element={<Containcard/>}></Route>
      <Route path="/card-details/:id" element={<Containcard/>} />
      <Route path='/booking' element={<Booking/>}></Route>

      
    </Routes>
    </Router>
    </>
  );
}

export default App;
