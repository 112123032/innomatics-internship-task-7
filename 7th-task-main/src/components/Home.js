import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faLaptop, faProjectDiagram, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

function Home() {
  return (
    <div className="container">
      <div className="left-section">
        <h1>We Transform Careers</h1>
        <p>
          Innomatics Research Labs specializes in <span className="highlight">advanced digital training</span> on NASSCOM-certified skills like Data Science, AI, Full-stack development, AWS, and more, helping students build valuable credentials.
        </p>
        <h2 className="highlight">NASSCOM Futureskills Prime Registered Business Partner</h2>
        <p>
          As an authorized “Training Partner with NASSCOM Futureskills Prime,” we strive to make individuals learn not just algorithms but also case studies and challenges derived from businesses. To improve the effectiveness and productivity of our trainee, 
          <span className="highlight">hackathons, workshops, and meetups</span> are conducted on a timely basis. Having a dedicated 
          <span className="highlight">placement vertical</span>, which helps trainees conquer the business world, solves the complexities. Innomatics research labs are supporting 
          <span className="highlight">over 100 companies</span> in finding the best candidate, which can upskill the business requirements and foster growth.
        </p>
        <h2 className="highlight">Recognized Edtech Leader</h2>
        <p>
          Awarded by <span className="highlight">Times of India</span> as Hyderabad’s top institute for Data Science. With 10,000+ trained, 500+ hiring partners, and advanced training facilities, we aim to make students job-ready.
        </p>
        <a href="#" className="button">View More</a>
      </div>
      <div className="right-section">
        <h2>Who We Are</h2>
        <div className="card">
          <FontAwesomeIcon icon={faGlobe} />
          <h3>Global Training Leaders</h3>
          <p>Industry professionals provide real-world business training.</p>
        </div>
        
        <div className="card">
          <FontAwesomeIcon icon={faProjectDiagram} />
          <h3>Projects & Internships</h3>
          <p>Hands-on projects driven by real industry cases.</p>
        </div>
        <div className="card">
          <FontAwesomeIcon icon={faCheckCircle} />
          <h3>100% Placement Assistance</h3>
          <p>Strong ties with top companies for career support.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
