import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = { hideFooter?: boolean };

const GeneralLayout: React.FC<Props> = ({ hideFooter, children }) => {
  const { description } = useStaticQuery(graphql`
    query Desciption {
      contentfulDescription {
        description
      }
    }
  `).contentfulDescription;
  console.log(description)
  return (
    <>
      <Helmet>
        <title>Marta Krawczyk</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
      </Helmet>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        {hideFooter ? null : <Footer />}
      </div>
    </>
  );
};
export default GeneralLayout;

GeneralLayout.defaultProps = {
  hideFooter: false,
};
