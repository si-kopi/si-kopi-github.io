import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';

const App = () => {
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 700,
        easing: "ease-in",
        delay: 100,
      });
      AOS.refresh();
    }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

