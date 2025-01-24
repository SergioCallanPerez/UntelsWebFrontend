import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/root.css";
import FloatingWhatsAppButton from "./components/floating_button.jsx";
import Faculty from "./pages/pregrade/faculties/faculty_page";
import Administracion from "./pages/pregrade/faculties/admin_science/careers/administration/administracion";
import Marketing from "./pages/pregrade/faculties/admin_science/careers/marketing/marketing";
import Environmental from "./pages/pregrade/faculties/environmental_engineering/environmental_engineering/environmental";
import Cepre from "./pages/cepre";
import Campus from "./pages/about-us/sections/campus";
import Authorities from "./pages/about-us/authorities";
import AboutUs from "./pages/about-us";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/facultades/:facultyName" element={<Faculty/>}/>
        <Route path="/carreras/administracion" element={<Administracion/>}/>
        <Route path="/carreras/marketing" element={<Marketing/>}/>
        <Route path="/carreras/ingenieria_ambiental" element={<Environmental/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>
        <Route path="/campus" element={<Campus />} />
        <Route path="/autoridades" element={<Authorities />} />
        <Route path="/cepre/informate" element={<Cepre/>}/>
      </Routes>
      <p>La presente página solo es una maquetación para la propuesta de página web para la Universidad Nacional Tecnológica de Lima Sur aún en desarrollo.</p>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
