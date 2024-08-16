// src/components/Footer.js

import React from "react";
import "./Footer.css"; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h3>About BasketMania</h3>
          <p>
            BasketMania brings you the latest news and updates from the world of
            basketball. Stay tuned for game highlights, player profiles, and
            more.
          </p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/teams">Teams</a>
            </li>
            <li>
              <a href="/players">Players</a>
            </li>
            <li>
              <a href="/schedules">Schedules</a>
            </li>
            <li>
              <a href="/standings">Standings</a>
            </li>
            <li>
              <a href="/tickets">Tickets</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <a
            href="https://facebook.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/facebook-icon.png" alt="Facebook" />
          </a>
          <a
            href="https://twitter.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/twitter-icon.png" alt="Twitter" />
          </a>
          <a
            href="https://instagram.com/BasketMania"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/instagram-icon.png" alt="Instagram" />
          </a>
        </div>
        <div className="footer-legal">
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms-of-service">Terms of Service</a>
            </li>
            <li>
              <a href="/cookie-policy">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
