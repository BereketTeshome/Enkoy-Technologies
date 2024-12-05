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
		<div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-4">
			<motion.div
				className="max-w-4xl mx-auto text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
			>
				<h1 className="text-4xl font-extrabold mb-4">Event Calendar</h1>
				<p className="mb-8 text-gray-300">
					Discover and register for upcoming events, webinars, and workshops.
				</p>

				<motion.div
					className="bg-gray-600 p-4 rounded-lg shadow-lg"
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
					/>
				</motion.div>
			</motion.div>

			{selectedEvent && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
				>
					<div className="bg-gray-800 text-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
						<h2 className="text-2xl font-bold mb-3">{selectedEvent.title}</h2>
						<p>
							<strong>Start:</strong>{" "}
							{moment(selectedEvent.start).format("MMMM Do YYYY, h:mm a")}
						</p>
						<p>
							<strong>End:</strong>{" "}
							{moment(selectedEvent.end).format("MMMM Do YYYY, h:mm a")}
						</p>
						<button
							onClick={handleClosePopup}
							className="mt-4 w-full py-2 bg-gray-500 hover:bg-gray-600 rounded-lg transition"
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
