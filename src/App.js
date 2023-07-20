import './App.css';
import Homepage from './Homepage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
