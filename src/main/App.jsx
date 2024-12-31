import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Mission from "./pages/about-us/mission";
import Header from "./components/header";
import Footer from "./components/footer";
import "./styles/root.css";
import FloatingWhatsAppButton from "./components/floating_button.jsx";

function App() {
  return (
    <BrowserRouter basename="/UntelsWebFrontend">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Mission" element={<Mission />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton/>
    </BrowserRouter>
  );
}

export default App;
