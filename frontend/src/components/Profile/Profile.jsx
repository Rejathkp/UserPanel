import React from 'react';
import './Profile.css'; // External CSS file

const Profile = () => {
  return (
    <div className="profile-section">
      {/* Circular Image */}
      <div className="profile-image">
        <img src="\src\assets\image.png" alt="Profile" />
      </div>

      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress" style={{ width: '70%' }}></div>
        
      </div>

      {/* Name */}
      <div className="profile-name">John Doe</div>

      {/* Username */}
      <div className='username'>@JohnDoe</div>

      {/* Contact Info */}
      <div className="contact-info">
        <div className="info-item">
          <span className="icon">📞</span>
          <span className="text">+123 456 7890</span>
        </div>
        <div className="info-item">
          <span className="icon">✉️</span>
          <span className="text">johndoe@example.com</span>
        </div>
        <div className="info-item">
          <span className="icon">✏️</span>
          <span className="text">Edit/Update Profile</span>
        </div>
      </div>

      {/* Profile Links */}
      <div className="profile-links">
        <div className="link-item">
          <span className="icon">👤</span>
          <span className="text">My Profile</span>
        </div>
        <div className="link-item">
          <span className="icon">💳</span>
          <span className="text">Payments</span>
        </div>
        <div className="link-item">
          <span className="icon">📄</span>
          <span className="text">Application Status</span>
        </div>
        <div className='link-item'>          
          {/* Logout Button */}
          <button className="logout-button">Logout</button>
        </div>
      </div>

    </div>
  );
};

export default Profile;