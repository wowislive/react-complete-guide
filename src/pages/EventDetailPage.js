import React from "react";
import { useParams } from "react-router-dom";

const EventDetailPage = () => {
  const params = useParams();

  return (
    <>
      <div>EventDetailPage</div>
      <h1>{params.someId}</h1>
    </>
  );
};

export default EventDetailPage;
