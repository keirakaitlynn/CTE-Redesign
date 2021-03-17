import React from "react";
import Header from "./Header"
import Newsletter from "./Newsletter"
import BlackTape from "../images/black-tape.png";

function MainContent() {
  return (
    <div className="main">
      <main>
        <Header />

        <section className="tour" id="tour">
          <div className="tour-header">
            <p><img src={BlackTape} width="245" alt="" /></p>
          </div>
          <div className="tour-content">
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="event">
              <div className="event-container">
                <ul className="event-left">
                  <a>
                    <li>Location</li>
                  </a>
                  <a>
                    <li>Venue</li>
                  </a>
                  <a>
                    <li>Date</li>
                  </a>
                </ul>
                <ul className="event-right">
                  <a>
                    <li>
                      <p>Get Tickets</p>
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <Newsletter />
      </main>
    </div>

  );
}

export default MainContent;
