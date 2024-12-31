import logo from './logo.svg';
import '../src/code/css/App.css';
import Home from './code/pages/Home';
import Navbar from '../src/code/modules/components/Navbar';
import { Routes, Route } from "react-router-dom";
import SignUp from '../src/code/pages/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        {/* <Route path="/about" element={} /> */}
      </Routes>
    
    </div>
  );
}

export default App;
