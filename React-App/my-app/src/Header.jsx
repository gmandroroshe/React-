import React from 'react';
import './Header.css'; //style
import profileImage from '/public/pic.png'; //image


function Header() {
  return (
    <header className="header">
            <div className="header-content">
                <div className="text-content">
                    <h1 className="name">John Smith</h1>
                    <h2 className="title">Front End Web Developer</h2>
                    <a href="#work" className="view-work-button">View My Work</a>
                </div>
                <img src={profileImage} alt="John Smith" className="profile-image" />
            </div>
        </header>
  );
}

export default Header;
