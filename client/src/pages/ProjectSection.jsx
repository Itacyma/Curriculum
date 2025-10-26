import React from 'react';
import '../style/ProjectSection.css';
import { GiocoDellaSfortuna } from '../components/Projects/GiocoDellaSfortuna';
import { TORent } from '../components/Projects/TORent';
import { AppRuggine } from '../components/Projects/AppRuggine';
import { GeoControl } from '../components/Projects/GeoControl';
import { RaspberryPi } from '../components/Projects/RaspberryPi';

function ProjectSection() {
  return (
    <section className="project-section" id="progetti-web">
      <h2 className="project-section-title">I miei progetti</h2>
      
      <GeoControl />
      <div style={{ height: '3.5rem' }}></div>

      <AppRuggine />
      <div style={{ height: '3.5rem' }}></div>

      <RaspberryPi />
      <div style={{ height: '3.5rem' }}></div>

      <GiocoDellaSfortuna />
      <div style={{ height: '3.5rem' }}></div>

      <TORent />
      <div style={{ height: '3.5rem' }}></div>

    </section>
  );
}

export { ProjectSection };
