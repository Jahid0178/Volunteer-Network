import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import "./UpdateEvent.css";

const UpdateEvent = () => {
  const [event, setEvent] = useState({});
  const [eventData, setEventData] = useState({
    title: "",
    date: "",
    textMessage: "",
    imageLink: "",
  });
  const history = useHistory();

  useEffect(() => {
    setEventData({
      title: event?.title,
      date: event?.date,
      textMessage: event?.textMessage,
      imageLink: event?.imageLink,
    });
  }, [event]);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/events/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setEvent(data);
      });
  }, []);

  const handleUpdateEvent = (e) => {
    fetch(`http://localhost:4000/addEvents/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          alert("Update successfully");
          setEventData({
            title: "",
            date: "",
            textMessage: "",
            imageLink: "",
          });
          history.push("/home");
        }
      });
    e.preventDefault();
  };
  return (
    <div className="update-container">
      <h2 className="text-center">This is update event: {event?.title}</h2>
      <form>
        <input
          type="text"
          onChange={(e) =>
            setEventData({ ...eventData, title: e.target.value })
          }
          value={eventData.title || ""}
        />
        <input
          type="date"
          onChange={(e) => setEventData({ ...eventData, date: e.target.value })}
          value={eventData.date || ""}
        />
        <textarea
          type="text"
          onChange={(e) =>
            setEventData({ ...eventData, textMessage: e.target.value })
          }
          value={eventData.textMessage || ""}
        />
        <input
          type="text"
          onChange={(e) =>
            setEventData({ ...eventData, imageLink: e.target.value })
          }
          value={eventData.imageLink || ""}
        />
        <input type="submit" value="Update" onClick={handleUpdateEvent} />
      </form>
    </div>
  );
};

export default UpdateEvent;
