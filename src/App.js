import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import Calendar from './pages/Calendar/Calendar';
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
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='home' element={<Home></Home>}></Route>
          <Route path='completedtask' element={<CompletedTask></CompletedTask>}></Route>
          <Route path='todo' element={<Todo></Todo>}></Route>
          <Route path='calendar' element={<Calendar></Calendar>}></Route>
        </Routes>
        <Footer></Footer>
        <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
