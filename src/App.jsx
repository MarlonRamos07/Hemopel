import React from "react";
import { Routes, Route } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { MyNavbar } from './Components/Navbar'
import { Footer } from './Components/Footer'
import Landing from './Pages/Landing'
import Cadastro from './Pages/Cadastro'
import Campanhas from './Pages/Campanhas'
import Agende from './Pages/Agende'
import Perfil from './Pages/Perfil'
import Agendamento from './Pages/Agendamento'
import Recusado from './Pages/Recusado'
import Aceito from './Pages/Aceito'
import Duvidas from './Pages/Duvidas'

function App() {
  return (
    <>
  
      <MyNavbar />
      <main className="flex-grow ">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/campanhas" element={<Campanhas />} />
          <Route path="/duvidas" element={<Duvidas />} />
          <Route path="/agende" element={<Agende />} />
          <Route path="/agendamento" element={<Agendamento />} />
          <Route path="/agendamentoRecusado" element={<Recusado />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/agendamentoAceito" element={<Aceito />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;
