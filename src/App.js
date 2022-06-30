import { Route, Routes } from 'react-router-dom';
import './App.css';
import CompletedTask from './pages/CompletedTask/CompletedTask';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar.js';
import Todo from './pages/Todo/Todo';

function App() {
  return (
    <div className="App">
       <Navbar></Navbar>
        <Routes>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='completedtask' element={<CompletedTask></CompletedTask>}></Route>
          <Route path='todo' element={<Todo></Todo>}></Route>
          <Route path='calendar' element={<CompletedTask></CompletedTask>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
  );
}

export default App;
