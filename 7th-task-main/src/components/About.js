import React from 'react';
import './About.css';

function About() {
  return (
    <div>
      <header className="header">
        <h1>About Innomatics Research Labs</h1>
      </header>
      <section className="content">
        <p>
          <span>Innomatics Research Labs</span> is a pioneer in ‘<span>Transforming Career and Lives</span>’ of individuals in the Digital Space by providing advanced training in 
          <span> NASSCOM FutureSkills Prime Certified Data Science, Machine Learning, Artificial Intelligence (AI), Full Stack Development, Amazon Web Services (AWS), DevOps, Microsoft Azure, Big Data Analytics, and Digital Marketing.</span>
          Our passion lies in bridging the gap between learning and real-time implementation, empowering individuals to be industry-ready and helping firms reap significant benefits.
        </p>
      </section>
      <section className="stats">
        <div className="stat">
        
          <h2>5000+</h2>
          <p>Trainees</p>
        </div>
        <div className="stat">
          
          <h2>400+</h2>
          <p>Student Reviews</p>
        </div>
        <div className="stat">
          
          <h2>300+</h2>
          <p>Partnered Companies</p>
        </div>
        <div className="stat">
       
          <h2>500+</h2>
          <p>Industry Connections</p>
        </div>
      </section>
      <section className="quote">
        <h2>“Learn, Explore & Experience”</h2>
        <p>
          We live by this motto; we let trainees work hands-on, explore challenges, and experience real-time business cases. Awarded as the Best Training Institute in Hyderabad by Times Of India for our relentless hard work and practical training approach, we strive to make individuals learn not just algorithms, but also business case studies and challenges.
        </p>
        <h2>Vision</h2>
        <p>
          Our vision is to transform India into a hub for Artificial Intelligence and analytics. We aim to be the most credible education institute for career transformation, with experts from various domains.
        </p>
        <h2>Mission</h2>
        <p>
          We are on a mission to help individuals excel through real-time approaches and promise businesses to find the best candidates. Our mission includes:
        </p>
        <ol className="custom-list">
  <li>1. Developing the state-of-the-art benchmark in data science</li>
  <li>2. Transforming all fields through the application of data science</li>
</ol>

      </section>
 

</div>

  );
}

export default About;
