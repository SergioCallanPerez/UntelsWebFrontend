import React from "react";

const note =
  "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida";

const messagesList = [
  { no: 301, message: note, date: "2024-12-29" },
  { no: 302, message: note, date: "2024-12-29" },
  { no: 303, message: note, date: "2024-12-29" },
  { no: 304, message: note, date: "2024-12-29" },
  { no: 305, message: note, date: "2024-12-29" },
  { no: 306, message: note, date: "2024-12-29" },
];

function Messages({ event }) {
  return (
    <div className="with-h-divider-on-background">
      <p>
        <b>{`Comunicado ${event.no}:`}</b> <small>{event.message}</small>
      </p>
    </div>
  );
}

export default function Communications() {
  return (
    <div className="d-flex flex-column gap-3">
      {messagesList.map((event, index) => (
        <Messages key={`message-${index}`} event={event} />
      ))}
    </div>
  );
}
