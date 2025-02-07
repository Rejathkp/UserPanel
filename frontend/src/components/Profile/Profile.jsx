import React from 'react';
import './Profile.css';
import { MdOutlineEmail, MdOutlineLocalPhone } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { TbUserSquare } from "react-icons/tb";
import { TfiMedall } from "react-icons/tfi";
import { RiFileEditLine } from "react-icons/ri";


const Profile = () => {
  return (
    <div className="profile-section">
      <div className="profile-image">
        <img src="\src\assets\image.png" alt="Profile" />
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: '70%' }}></div>
        
      </div>

      <div className="profile-name">Abhishek</div>

      <div className='username'>@Abhishek</div>

      <div className="contact-info">
        <div className="info-item">
          <MdOutlineLocalPhone className='icon'/>
          <span className="text">+123 456 7890</span>
        </div>
        <div className="info-item">
        <MdOutlineEmail className='icon'/>
        <span className="text">johndoe@example.com</span>
        </div>
        <div className="info-item">
        <CiEdit className='icon'/>
        <span className="text">Edit/Update Profile</span>
        </div>
      </div>

      <div className="profile-links">
        <div className="link-item">
        <TbUserSquare className='icon'/>
        <span className="text">My Profile</span>
        </div>
        <div className="link-item">
        <TfiMedall className='icon'/>
        <span className="text">Payments</span>
        </div>
        <div className="link-item">
        <RiFileEditLine className='icon'/>
        <span className="text">Application Status</span>
        </div>
        <div className='link-item'>          
          <button className="logout-button">Logout</button>
        </div>
      </div>

    </div>
  );
};

export default Profile;