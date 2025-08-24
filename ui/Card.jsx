import React from "react";
import "@/styles/Card.css";
import { FaInstagram, FaPhone } from "react-icons/fa";

const Card = ({ name, photo, ig, contact, role, details }) => {
  return (
    <div className="w-full items-center justify-center mt-30 flex h-auto ">
    <div className="profile-card">
      <div className="card-content">
        <img className="profile-img" src={photo} alt={name} />
        <div className="info">
          <h2>{name}</h2>
          <p className="role">{role}</p>
          <div className="links">
            <a
              href={`https://instagram.com/${ig}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ig"
            >
              <FaInstagram /> @{ig}
            </a>
            <a href={`tel:${contact}`} className="phone">
              <FaPhone /> {contact}
            </a>
          </div>
        </div>
      </div>

      {/* Hover slide-in details */}
      <div className="details">
        <h3>More About {name.split(" ")[0]}</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Card;
