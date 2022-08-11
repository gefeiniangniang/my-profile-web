import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from "./components/Contact";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='#' element={<Home/>} />
        <Route path='/connect' element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
