import { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import moment from "moment";
import { motion } from "framer-motion";

const localizer = momentLocalizer(moment);

// Sample events
const events = [
  {
    id: 1,
    title: "Webinar: React for Beginners",
    start: new Date(2023, 11, 10, 15, 0),
    end: new Date(2023, 11, 10, 16, 30),
  },
  {
    id: 2,
    title: "Advanced Tailwind Workshop",
    start: new Date(2023, 11, 15, 10, 0),
    end: new Date(2023, 11, 15, 12, 0),
  },
  {
    id: 3,
    title: "Framer Motion Animation Training",
    start: new Date(2023, 11, 20, 14, 0),
    end: new Date(2023, 11, 20, 16, 0),
  },
];

const EventCalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSelectEvent = (event) => setSelectedEvent(event);
  const handleClosePopup = () => setSelectedEvent(null);

  return (
    <div className="min-h-screen p-6 text-white bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.div
        className="max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="mb-6 text-5xl font-extrabold text-indigo-400">
          Event Calendar
        </h1>
        <p className="mb-8 text-lg text-gray-300">
          Discover and register for upcoming events, webinars, and workshops.
        </p>

        <motion.div
          className="p-6 bg-gray-700 rounded-lg shadow-lg"
          whileHover={{ scale: 1.02 }}
        >
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: "400px" }}
            onSelectEvent={handleSelectEvent}
            className="rounded-lg shadow-md"
            eventPropGetter={() => ({
              style: {
                backgroundColor: "#6366F1", 
                color: "white",
                borderRadius: "4px",
              },
            })}
          />
        </motion.div>
      </motion.div>

      {selectedEvent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
        >
          <div className="w-11/12 max-w-md p-6 text-white bg-gray-800 rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-bold text-indigo-400">
              {selectedEvent.title}
            </h2>
            <p className="mb-2 text-gray-200">
              <strong>Start:</strong>{" "}
              {moment(selectedEvent.start).format("MMMM Do YYYY, h:mm a")}
            </p>
            <p className="mb-4 text-gray-200">
              <strong>End:</strong>{" "}
              {moment(selectedEvent.end).format("MMMM Do YYYY, h:mm a")}
            </p>
            <button
              onClick={handleClosePopup}
              className="w-full py-2 mt-4 transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
            >
              Close
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default EventCalendarPage;
