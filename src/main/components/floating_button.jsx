import React from 'react';
import { Button } from 'react-bootstrap';
import '../styles/floating_button.css';
import { IoLogoWhatsapp } from 'react-icons/io5';

const FloatingWhatsAppButton = () => {
  const redirectToWhatsApp = () => {
    const phoneNumber = '1234567890'; // Reemplazar con el numero de la universidad
    const message = encodeURIComponent('¡Hola! Me gustaría obtener más información.');
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="floating-button">
      <Button variant="success" onClick={redirectToWhatsApp}>
        <IoLogoWhatsapp/>
      </Button>
    </div>
  );
};

export default FloatingWhatsAppButton;