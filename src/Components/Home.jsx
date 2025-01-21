/* Home.jsx */
import React from 'react';
import './Home.css'; // Import the CSS file

export default function Home() {
  return (
    <div className="home-container">
      {/* Container for Logo and Buttons in a row */}
      

      {/* Container for Text Description */}
      <div className="text-container">
        <h2 className="title">
          Welcome to CME Mental Health
        </h2>
        <p className="description">
          Discover qualified psychologists and therapies tailored to your mental well-being. 
          Take the first step toward a healthier mind and book an appointment with our experts today.
        </p>
      </div>
    </div>
  );
}
