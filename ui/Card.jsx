import React from "react";
import Image from "next/image";
import { FaInstagram, FaPhone } from "react-icons/fa";
import "@/styles/Card.css";

const Card = ({ name, photo, ig, contact, role, details }) => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="card-content">
          <Image priority  className="profile-img" src={photo} alt={name} />
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
      </div>

      {/* hidden details revealed on hover */}
      <div className="details">
        <h3>More About {name.split(" ")[0]}</h3>
        <ul>
          {details.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Card;
