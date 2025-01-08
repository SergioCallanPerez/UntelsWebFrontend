import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Mission from "./pages/about-us/mission";
import Review from "./pages/about-us/review"
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/root.css";
import FloatingWhatsAppButton from "./components/floating_button.jsx";
import Pregrade from "./pages/pregrade";
import Administracion from "./pages/pregrade/faculties/admin_science/careers/administration/administracion";
import Marketing from "./pages/pregrade/faculties/admin_science/careers/marketing/marketing";
import Directory from "./pages/about-us/directory";
import Statute from "./pages/about-us/statute";
import OrganizationChart from "./pages/about-us/organization_chart";
import Campus from "./pages/about-us/campus";
import Authorities from "./pages/about-us/authorities";
import AboutUs from "./pages/about-us/about-us";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pregrado" element={<Pregrade/>}/>
        <Route path="/carreras/administracion" element={<Administracion/>}/>
        <Route path="/carreras/marketing" element={<Marketing/>}/>
        <Route path="/nosotros" element={<AboutUs/>}/>
        <Route path="/mision" element={<Mission />} />
        <Route path="/resena" element={<Review />} />
        <Route path="/directorio_institucional" element={<Directory  />} />
        <Route path="/estatuto" element={<Statute />} />
        <Route path="/organigrama" element={<OrganizationChart />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/autoridades" element={<Authorities />} />
      </Routes>
      <p>La presente página solo es una maquetación para la propuesta de página web para la Universidad Nacional Tecnológica de Lima Sur aún en desarrollo.</p>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
