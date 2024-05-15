
import { Routes ,Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';
import Home from './Home';

function App() {
  return (
    <div className="App">
     <Routes>
   <Route path='/'element={<Register/>}/>
   <Route path='/Login'element={<Login/>}/>
   <Route path='/Home'element={<Home/>}/>
   </Routes>
    </div>
  );
}

export default App;
