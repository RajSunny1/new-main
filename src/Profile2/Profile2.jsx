import React from 'react';
import './Profile2.css';

const Profile2 = () => {
  return (
    <div className="signup-container">
      <div className="left-section">
        <h1>
          Ready to dive into <span className="highlight">HABOT?</span>
        </h1>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities <br />
          and potential for business growth. Gain access to a vibrant community <br />
          of like-minded individuals, unlock valuable resources, and take the <br />
          first step towards realizing your entrepreneurial dreams.
        </p>
        <button className="signup-button">
          Sign up Today! <span className="arrow">→</span>
        </button>
      </div>
      <div className="right-section">
        <div className="location-button">Abu Dhabi</div>
        <div className="location-button">Dubai</div>
        <div className="location-button">Sharjah & Ajman</div>
        <div className="location-button">Fujairah</div>
        <div className="location-button">Ras Al Khaimah</div>
        <div className="location-button">Umm Al Quwain</div>
      </div>
    </div>
  );
};

export default Profile2;
