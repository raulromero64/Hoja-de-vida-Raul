import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Pages/Home";
import Somos from "./Components/Pages/Somos";
import Diseños from "./Components/Pages/Diseños";
import Historias from "./Components/Pages/Historias";
import Contactos from "./Components/Pages/Contactos";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/diseños" element={<Diseños />} />
        <Route path="/historias" element={<Historias />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </>
  );
}

export default App;
