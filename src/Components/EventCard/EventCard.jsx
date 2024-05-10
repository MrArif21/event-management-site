import React from 'react';
import "./EventCard.css";

function EventCard({ id, data, heading, location, description, img }) {
  const { year, month } = data;
  return (
    <>
      <div>
        <h3>{heading}</h3>
        <p>
          <span>Year: {year}</span>
          <span>Month: {month}</span>
        </p>
        <p>{location}</p>
      </div>
    </>
  );
}

export default EventCard;
