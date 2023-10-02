import React from "react";
import './EventHome.css';

const EventHome = () => (
  <div className="event-homepage">
    <header>
      <h1>Kolama Event Page</h1>
    </header>
    <main>
      <section className="hero">
        <h2>Plan Your Perfect Event</h2>
        <p>From any festival to corporate events, we've got you covered.</p>
        <button>Start Planning</button>
      </section>
      <section className="features">
        <div className="feature">
          <h3>Easy to Use</h3>
          <p>Our event management system is intuitive and user-friendly, making it easy for you to plan your event.</p>
        </div>
        <div className="feature">
          <h3>Customizable</h3>
          <p>Personalize your event to your exact specifications with our customizable features.</p>
        </div>
        <div className="feature">
          <h3>Efficient</h3>
          <p>Our system streamlines the planning process, saving you time and energy.</p>
        </div>
      </section>
      <center>
      <section className="events">
        <h2>Upcoming Events</h2>
        <ul>
          <li>
            <h3>Wedding of the Year</h3>
            <p>June 12, 2023</p>
            <button>View Details</button>
          </li>
          <li>
            <h3>Company Retreat</h3>
            <p>July 15-18, 2023</p>
            <button>View Details</button>
          </li>
          <li>
            <h3>Birthday Bash</h3>
            <p>August 5, 2023</p>
            <button>View Details</button>
          </li>
        </ul>
      </section>
      </center>
    </main>
   
  </div>
);

export default EventHome;
