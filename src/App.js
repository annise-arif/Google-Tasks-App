import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import Navbar from './pages/Navbar/Navbar.js';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        <Routes>
          <Route></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
