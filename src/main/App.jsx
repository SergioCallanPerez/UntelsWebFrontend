import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Mission from "./pages/about-us/mission";
import Review from "./pages/about-us/review"
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/root.css";
import FloatingWhatsAppButton from "./components/floating_button.jsx";
import Administracion from "./pages/pregrade/area1/careers/administracion"; 
import Directory from "./pages/about-us/directory";
import Statute from "./pages/about-us/statute";
import OrganizationChart from "./pages/about-us/organization_chart";
import Campus from "./pages/about-us/campus";
import Authorities from "./pages/about-us/authorities";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/carreras/administracion" element={<Administracion/>}/>
        <Route path="/mision" element={<Mission />} />
        <Route path="/resena" element={<Review />} />
        <Route path="/directorio_institucional" element={<Directory  />} />
        <Route path="/estatuto" element={<Statute />} />
        <Route path="/organigrama" element={<OrganizationChart />} />
        <Route path="/campus" element={<Campus />} />
        <Route path="/autoridades" element={<Authorities />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
