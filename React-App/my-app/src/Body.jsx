import React from 'react';
import './Body.css'; // Ensure you have this CSS file for styling
import aboutImage from '/public/pic.png'; // Ensure you have the correct path to your image

const Body = () => {
    return (
        <section className="about-section">
            <div className="about-content">
                <img src={aboutImage} alt="About Me" className="about-image" />
                <div className="text-content">
                    <h2 className="about-title">About Me</h2>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eleifend, 
                        nunc non suscipit consectetur, purus eros bibendum velit, eget egestas odio 
                        dolor sed diam. Aenean maximus magna in ligula euismod, sit amet.
                    </p>
                    <p className="about-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus velit risus, 
                        velit malesuada scelerisque commodo risus, vel sodales dolor lectus in nunc. 
                        Fusce sit amet turpis id justo laoreet rutrum non eget purus.
                    </p>
                    <a href="#portfolio" className="view-work-button">View My Work</a>
                </div>
            </div>
        </section>
    );
};

export default Body;
