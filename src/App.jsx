import { BrowserRouter, Route, Routes } from 'react-router-dom';
import{ useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import CSS AOS
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
