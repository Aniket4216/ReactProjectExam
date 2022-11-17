import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Booking from './component/Booking';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          

         <Route exact path='/' element={<Signup/>}/>

         <Route exact path='/signin' element={<Signin/>}/>

         <Route exact path='/booking' element={<Booking/>}/>

        </Routes>

       

      </div>
    </BrowserRouter>

  );
}

export default App;
