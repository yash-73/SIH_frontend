import { useState, useEffect } from 'react';
import './AboutUs.css';

// Sample data for the team members
const teamMembers = [
  { name: "Shreya Bhide", role: "TE-01", bio: "" },
  { name: "Samali Rajderkar", role: "TE-10", bio: "" },
  { name: "Tina Chugera", role: "TE-08", bio: "" },
  { name: "Harshwardhan Sawant", role: "TE-08", bio: "" },
  { name: "Yash Shinde", role: "TE-01", bio: "" },
  { name: "Gauri Desale", role: "TE-08", bio: "" }
];

const AboutUs = () => {
  const [faq, setFaq] = useState(<></>);

  useEffect(() => {
    // Load FAQ content
    setFaq(

    );

    console.log(faq);
  }, []);

  return (
    <div className="container">
      <h1>About FarmGuard</h1>

      <section>
        <h2>Vision</h2>
        <p>Our Vision</p>
      </section>

      <section>
        <h2>Technology</h2>
        <p>to be updated</p>
      </section>

      <section>
        <h2>Our Team</h2>
        <div id="team">
          {teamMembers.map(member => (
            <div className="team-member" key={member.name}>
              <h3>{member.name}</h3>
              <h4>{member.role}</h4>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>FAQ</h2>
        <div id="faq" ><>
          <p><strong>What is FarmGuard?</strong><br /></p>
          <p><strong>How does FarmGuard work?</strong><br /></p>
          <p><strong>Who can use FarmGuard?</strong><br /></p>
          <p><strong>How do I get started with FarmGuard?</strong><br />Sign up on our platform, upload images of your crops</p></></div>
      </section>

      <section className="blog-section">
        <h2>Blog</h2>
        <p>will put blogs related to farming</p>
      </section>

      <section className="careers-section">
        <h2>Careers</h2>
        <p>Join Us @the FarmGuard </p>
        <a className='bg-[#5fc321]' href="#">View Current Openings</a>
      </section>
    </div>
  );
};

export default AboutUs;

