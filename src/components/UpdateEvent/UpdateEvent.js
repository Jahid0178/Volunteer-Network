import React from "react";
import { useParams } from "react-router";

const UpdateEvent = () => {
  const { id } = useParams();
  return (
    <div>
      <span>{id}</span>
      <h2>This is update event</h2>
    </div>
  );
};

export default UpdateEvent;
