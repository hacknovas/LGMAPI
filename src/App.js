import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserS from './Components/UserS';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <div>
      <Navbar/>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Content/>} />
          <Route path='/user' element={<UserS/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>

    </div>

    </>
  );
}

export default App;
