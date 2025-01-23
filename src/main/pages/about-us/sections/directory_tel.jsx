import useScrollTo from "@/hooks/useScrollTo";
import { React } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

export default function DirectoryTel() {
  const ref = useScrollTo("section", "directorio-telefonico");
  const isMd = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <section ref={ref}>
      <Container>
        <h2
          className={`background-title ${
            isMd ? "with-underline" : "with-underline-left"
          } text-md-start text-center mb-5`}
        >
          <b>Directorio Telefónico (Anexos)</b>
        </h2>
        <Row className="text-center text-md-start">
          <Col xs={12} md={4} className="d-flex flex-column gap-1">
            <small>132 - Abastecimiento - Asistente</small>
            <small>117 - Abastecimiento - Cotizaciones</small>
            <small>138 - Abastecimiento - Jefatura</small>
            <small>154 - Abastecimiento - Logística</small>
            <small>178 - Abastecimiento - Órdenes</small>
            <small>135 - Abastecimiento - Secretaria</small>
            <small>185 - Admisión (Informes)</small>
            <small>116 - Admisión (Secretaría)</small>
            <small>133 - Almacén</small>
            <small>136 - Asesoría Legal</small>
            <small>164 - Bibsmalloteca</small>
            <small>167 - Bibsmalloteca - Desarrollo Colecciones</small>
            <small>156 - Bibsmalloteca - Jefatura</small>
            <small>140 - Bienestar Universitario - Asistenta Social</small>
            <small>112 - Bienestar Universitario - Bienestar</small>
            <small>177 - Bienestar Universitario - Comedor</small>
            <small>181 - Bienestar Universitario - Deporte</small>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column gap-1">
            <small>184 - Casmalldad</small>
            <small>101 - Central Telefónica</small>
            <small>158 - Centro Cultural</small>
            <small>144 - Centro de Idiomas</small>
            <small>153 - Centro de Producción</small>
            <small>183 - CEPRE - Informes</small>
            <small>182 - CEPRE - Secretaria</small>
            <small>189 - Comité Electoral Universitaria</small>
            <small>145 - Contabismalldad - Asistente</small>
            <small>166 - Contabismalldad - Jefatura</small>
            <small>155 - Control Patrimonial</small>
            <small>121 - Cooperación</small>
            <small>126 - Escuela Profesional de Administración</small>
            <small>
              129 - Escuela Profesional de Administración de Empresas
            </small>
            <small>126 - Escuela Profesional de Ingeniería Ambiental</small>
            <small>128 - Escuela Profesional de Ingeniería de Sistemas</small>
          </Col>
          <Col xs={12} md={4} className="d-flex flex-column gap-1">
            <small>
              127 - Escuela Profesional de Ingeniería Electrónica y
              Telecomunicaciones
            </small>
            <small>
              143 - Escuela Profesional de Ingeniería Mecánica y Eléctrica
            </small>
            <small>134 - Especiasmallsta en Asuntos Académicos</small>
            <small>115 - Estudios Generales - Jefatura</small>
            <small>186 - FIG - Ingeniería y Gestión</small>
            <small>165 - Fondo Editorial</small>
            <small>139 - Grados y Títulos - Responsable</small>
            <small>149 - Imagen</small>
            <small>150 - Infraestructura</small>
            <small>125 - Investigación</small>
            <small>163 - Laboratorio Ingeniería Ambiental</small>
            <small>105 - OCI - Asistente</small>
            <small>148 - OCI - Jefatura</small>
            <small>161 - Operaciones y Mantenimiento</small>
            <small>173 - OTIC - Base de Datos</small>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
