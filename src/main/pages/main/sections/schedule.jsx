import React from "react";

const auditorium = {
  sanJuanPablo: "Auditorio S. S. san Juan Pablo II",
  palacioJuventud: "Palacio de la juventud",
  miniAuditorio: "Miniauditorio",
  laboratorioB1_4: "Laboratorio B1-4 (Pabellón B)",
  aulaC4_3: "Aula C4-3",
};

const events = [
  {
    day: 9,
    month: "ENE",
    description: "Semana de Administración",
    time: "09:00h",
    place: `${auditorium.sanJuanPablo} y ${auditorium.palacioJuventud}`,
  },
  {
    day: 12,
    month: "ENE",
    description: "VI Cicti",
    time: "14:00h",
    place: `${auditorium.miniAuditorio} y ${auditorium.laboratorioB1_4}`,
  },
  {
    day: 20,
    month: "ENE",
    description: "Clase espejo untels",
    time: "10:00h",
    place: `${auditorium.aulaC4_3}`,
  },
  {
    day: 10,
    month: "FEB",
    description: "Ceremonia de Colación",
    time: "17:00h",
    place: `${auditorium.sanJuanPablo}`,
  },
];

function Event({ event }) {
  return (
    <div className="d-flex flex-row gap-4 event">
      <div className="badge-card px-3 py-2 align-self-center text-center">
        <b>
          {event.day}
          <br />
          {event.month}
        </b>
      </div>
      <div>
        <small>
          <b>Evento: </b>
          {event.description}
          <br />
          <b>Hora: </b>
          {event.time}
          <br />
          <b>Lugar: </b>
          {event.place}
        </small>
      </div>
    </div>
  );
}

export default function Schedule() {
  return (
    <div className="d-flex flex-column gap-3">
      {events.map((event, index) => (
        <Event key={`event-${index}`} event={event} />
      ))}
    </div>
  );
}
