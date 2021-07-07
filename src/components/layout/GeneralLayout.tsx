import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './Footer';
import Navbar from './Navbar';

type Props = { hideFooter?: boolean };

const GeneralLayout: React.FC<Props> = ({ hideFooter, children }) => {
  return (
    <>
      <Helmet>
        <title>Marta Krawczyk</title>
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
