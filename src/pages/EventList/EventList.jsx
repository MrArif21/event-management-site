import React from "react";
import "./EventList.css";
import EventCard from "../../Components/EventCard/EventCard";
import { EventList } from "../../utils/EventDatabase";

const EventList = () => {
  const renderEventCard = () => {
    return EventList.map(
      ({ id, data, heading, location, description, img }) => {
        {
          return (
            <EventCard
              key={id}
              id={id}
              data={data}
              heading={heading}
              location={location}
              description={description}
              img={img}
            />
          );
        }
      }
    );
  };

  return (
    <div>
      {EventList.length > 0 ? (renderEventCard()) : <p>No Event Found</p>}
    </div>
  );
};

export default EventList;
