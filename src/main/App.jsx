import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Mission from "./pages/about-us/mission";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/root.css";
import FloatingWhatsAppButton from "./components/floating_button.jsx";
import Administracion from "./pages/pregrade/area1/careers/administracion"; 

function App() {
  return (
    <BrowserRouter basename="/UntelsWebFrontend">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/administracion" element={<Administracion/>}/>
        <Route path="/Mission" element={<Mission />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton/>
    </BrowserRouter>
  );
}

export default App;
