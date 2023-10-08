import './App.css';
import Header from './componentes/Header.js';
import Main from './componentes/Main.js';
import Footer from './componentes/Footer.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Faq from './faq/Faq';
import UserSignup from './users/signup/cadastro.js';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Header/>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/faq" element={<Faq/>}/>
              <Route path="/users/signup" element={<UserSignup/>}/>
            </Routes>
            <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
