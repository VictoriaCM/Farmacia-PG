import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home';
import FormularioCategoria from './components/categoria/formularioCategoria/FormularioCategoria';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';
import DeletarCategoria from './components/categoria/deletarCategoria/DeletarCategoria';


function App() {
  return (
    <>

      <BrowserRouter>
        <NavBar />
        <div className='min-h-[80vh]'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;