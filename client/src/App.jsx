import React, { useState, useEffect } from "react";
import "./App.css";
import EventFormContainer from "./components/EventFormContainer";
import Modal from "./components/Modal";
import { HeroSection } from "./components/HeroSection/hero-section";
import { EventList } from "./components/EventList/event-list";
import axiosInstance from "./apis/Axiosinstance";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [loadingEvents, setLoadingEvents] = useState(true);
  const [eventsError, setEventsError] = useState(null);

  const fetchEvents = async () => {
    setLoadingEvents(true);
    try {
      const response = await axiosInstance.get("/all-events");
      setEvents(response?.data?.data || []);
      setEventsError(null);
    } catch (error) {
      setEventsError("Failed to load events. Please try again later.");
    } finally {
      setLoadingEvents(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Header setIsModalOpen={setIsModalOpen} />

      <HeroSection setIsModalOpen={setIsModalOpen} />
      <section id="upcoming">
        <EventList
          events={events}
          loading={loadingEvents}
          error={eventsError}
          refreshEvents={fetchEvents}
        />
      </section>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <EventFormContainer
          onSuccess={() => {
            fetchEvents();
            setIsModalOpen(false);
          }}
        />
      </Modal>
      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}

export default App;
