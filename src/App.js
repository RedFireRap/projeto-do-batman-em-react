import './App.css';
import react from 'react';
import Home from './components/pages/home'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './components/pages/contact/contact';
import Fotos from './components/pages/Fotos/Fotos';
import Comments from './components/pages/comments/comments';

function App(){

  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={< Home />} /> 
        <Route path='/Fotos' element={< Fotos />} /> 
        <Route path='/Contact' element={< Contact />} />  
        <Route path='/Comments' element={< Comments />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;