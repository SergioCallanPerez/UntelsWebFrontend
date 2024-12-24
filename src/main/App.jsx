import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
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
      </Routes>
      <Footer />
      <FloatingWhatsAppButton/>
    </BrowserRouter>
  );
}

export default App;
