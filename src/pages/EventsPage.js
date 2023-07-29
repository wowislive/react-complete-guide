import React from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

const EventsPage = () => {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {EVENTS.map((prod) => (
          <li key={prod.id}>
            <Link to={prod.id}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default EventsPage;
