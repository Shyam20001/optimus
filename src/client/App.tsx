import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ProjectCard from './components/ProjectCard';
import EducationCard from './components/EducationCard';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <section id="about" className="my-8">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p>To work in a highly competitive environment with a perfect challenge by contributing the best for the growth of the company...</p>
        </section>
        <section id="projects" className="my-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <ProjectCard title="Stack Analysis Using Web Development" description="Analyzed and enhanced software systems for improved performance at JP Morgan." />
          <ProjectCard title="Army Soldiers Health and Wellness Observing Sensors Embedded Safeguard Helmet Using IoT" description="Monitored the health and safety of soldiers through sensor-equipped helmets." />
          <ProjectCard title="Travel and Tour Website" description="Created an interactive and user-friendly platform for travel and tour services using HTML, CSS, and JavaScript." />
        </section>
        <section id="education" className="my-8">
          <h2 className="text-2xl font-bold">Education</h2>
          <EducationCard school="Kshatriya girl's Higher Secondary School, Virudhunagar" degree="SSLC" percentage="88%" year="2018-2019" />
          <EducationCard school="Kshatriya girl's Higher Secondary School, Virudhunagar" degree="HSC" percentage="90.74%" year="2019-2021" />
          <EducationCard school="V.S.B Engineering College, Karur" degree="Engineering" cgpa="8.15" year="2021-2023" />
        </section>
        <section id="contact" className="my-8">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <ContactForm />
        </section>
      </main>
      <footer className="bg-gray-800 text-white text-center p-4">
        <p>© 2024 Susmitha M. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
