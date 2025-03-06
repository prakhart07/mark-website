import React from "react";
import "./BookingPage.css";
import { FaUserCircle, FaHome } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const BookingPage = () => {
  return (
    <div className="container">
      {/* Top Navigation */}
      <div className="top-nav">
        <h2 className="logo">Logo</h2>
        <nav>
          <a href="#">BOOKING</a>
          <a href="#">SETTING</a>
          <a href="#">LOGOUT</a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="content">
        {/* Booking Details Section */}
        <div className="booking-details">
          <h2>Booking Details</h2>
          <div className="details">
            <p><strong>Booking Status:</strong> Available</p>
            <p><strong>City Name:</strong> Available</p>
            <p><strong>Slot Date:</strong> 26-Jan-2025</p>
            <p><strong>Time:</strong> 01:00AM - 02:00AM</p>
            <p><strong>Slot Rate:</strong> XXX</p>
          </div>
          <div className="image-box">
            <img src="/indian-oil-logo.png" alt="Indian Oil" />
          </div>
          <button className="btn">Use This Image</button>
        </div>

        {/* Mobile Booking UI */}
        <div className="mobile-view">
          <div className="mobile-header">
            <div>
              <h3>NASHIK</h3>
              <p>John Doe</p>
            </div>
            <FaUserCircle size={24} />
          </div>
          <div className="booking-card">
            <h3>xyz</h3>
            <p>xyz</p>
            <p>xyz</p>
            <p>xyz</p>
          </div>
          <div className="logo-container">
            <img src="/indian-oil-logo.png" alt="Indian Oil" />
          </div>
          <div className="mobile-nav">
            <FaHome size={24} />
            <IoSettingsSharp size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
