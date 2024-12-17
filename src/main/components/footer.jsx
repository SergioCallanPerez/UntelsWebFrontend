import React from "react";
import {
  PiMapPinFill,
  PiPhoneCallFill,
  PiRadioButtonFill,
} from "react-icons/pi";
import { IoIosMail } from "react-icons/io";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-item-container">
        <p>
          <icon>
            <PiMapPinFill />
          </icon>
          <strong> Campus universitario:</strong> Av. Bolívar S/N, sector 3,
          grupo 1, mz. A, sublote 3-Villa El Salvador
        </p>
        <p>
          <icon>
            <PiPhoneCallFill />
          </icon>{" "}
          (01) 715 8878
        </p>
        <p>
          <icon>
            <IoIosMail />
          </icon>{" "}
          informes@untels.edu.pe
        </p>
        <p>
          <icon>
            <PiRadioButtonFill />
          </icon>
          <strong> Cómo llegar: </strong>
          <a href="https://maps.app.goo.gl/U1LMLXLU2Qd2VtD4A" target="blank">
            Mapa del campus
          </a>
        </p>
      </div>
    </footer>
  );
}
