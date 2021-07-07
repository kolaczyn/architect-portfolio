import * as React from 'react';
import { Helmet } from 'react-helmet';
import GeneralLayout from '../components/layout/GeneralLayout';
import ContainerSmall from '../components/container/ContainerSmall';
import Hero from '../components/home/Hero';
import AboutMe from '../components/home/AboutMe';
import Projects from '../components/home/Projects';

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>Marta Krawczyk</title>
      </Helmet>
      <GeneralLayout>
        <div className="space-y-16">
          <Hero />
          <AboutMe />
          <Projects />
        </div>
      </GeneralLayout>
    </>
  );
};

export default IndexPage;
