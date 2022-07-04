import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserS from './Components/UserS';
import Content from './Components/Content';
import  Navbar  from './Components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Content />} />
            <Route path='/user' element={<UserS />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
