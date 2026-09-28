import { useState } from "react";
import { Link } from "react-router-dom";
 
// This component receives ONE event object as a prop, called "event"
function EventCard({ event }) {
  // seatsLeft is STATE - it belongs to this one card and can change over time
  const [seatsLeft, setSeatsLeft] = useState(() => {
  return Number(localStorage.getItem(event.name)) || event.seats;
});
 
  function handleRegister() {
  if (seatsLeft > 0) {
    const newSeats = seatsLeft - 1;

    setSeatsLeft(newSeats);

    localStorage.setItem(event.name, newSeats);
  }
}
 
  return (
    <div className="event-card">
      <h3>{event.name}</h3>
      <p>Category: {event.category}</p>
      <p>Fee: {event.fee === 0 ? "Free" : `Rs. ${event.fee}`}</p>
      <p>Seats left: {seatsLeft}</p>
 
      {seatsLeft === 0 ? (
        <button disabled>SOLD OUT</button>
      ) : (
        <Link to="/register">
  <button onClick={handleRegister}>Register</button>
</Link>
      )}
    </div>
  );
}
 
export default EventCard;
