import logo from './logo.svg';
import '../src/code/css/App.css';
import Home from './code/pages/Home';
import Navbar from '../src/code/modules/components/Navbar';
import { Routes, Route } from "react-router-dom";
import Points from './code/modules/components/points/points';
import Events from './code/modules/components/events';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/events" element={<Events/>} />
        <Route path="/points" element={<Points/>} />
      </Routes>
    
    </div>
  );
}

export default App;
