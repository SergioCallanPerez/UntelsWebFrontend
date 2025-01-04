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

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/administracion" element={<Administracion/>}/>
        <Route path="/mision" element={<Mission />} />
        <Route path="/resena" element={<Review />} />
        <Route path="/directorio_institucional" element={<Directory  />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
    </Router>
  );
}

export default App;
