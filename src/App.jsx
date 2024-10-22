import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'aos/dist/aos.css'; // Import CSS AOS
import HomePage from './Pages/HomePage';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';

export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

