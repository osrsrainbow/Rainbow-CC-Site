import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Events extends Component {
  render() {
    return (
      <section id="events">
        <div className="events-container">
          <h1>Events</h1>
          <div className="text-container">
            <p>We run a variety of daily events in a broad selection of timezones including group skilling, bossing, pvm training and out-of-game events such as movie nights, skribbl.io, and Jackbox.</p>
            <p>If you would like to run an event or have any questions regarding them, please message an admin or a member of the Events Coordination team once you are accepted to the CC.</p>
          </div>
          <div className="carousel-container">
            <Carousel width="600px" autoPlay infiniteLoop>
              <img src="/images/events/screenie1.png" />
              <img src="/images/events/screenie2.png" />
              <img src="/images/events/screenie3.png" />
              <img src="/images/events/screenie4.png" />
            </Carousel>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
