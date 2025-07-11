import { Routes, Route } from 'react-router-dom'
import { MyNavbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import Cadastro from './Pages/Cadastro'
import Campanhas from './Pages/Campanhas'
import Agende from './Pages/Agende'
import Perfil from './Pages/Perfil'
import Landing from './Pages/Landing'
import Login from './Pages/Login'
import Duvidas from './Pages/Duvidas'
function App() {
  return (
    <>
  
      <MyNavbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/informacoes" element={<Duvidas/>}/>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/agende" element={<Agende />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path ="/login" element={<Login/>}/>
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
