import { Link } from 'gatsby';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import ContainerSmall from '../components/container/ContainerSmall';
import GeneralLayout from '../components/layout/GeneralLayout';
import ButtonStyle from '../components/ui/ButtonStyle';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Błąd 404 | Marta Krawczyk</title>
      </Helmet>
      <GeneralLayout>
        <ContainerSmall className="min-h-screen font-sans flex items-center">
          <div className="space-y-6">
            <h1 className="font-sans font-bold">
              <span className="text-black">Błąd 404,</span>
              <br />
              <span className="text-4xl">Żądana strona nie istnieje.</span>
            </h1>
            <Link className="inline-block" to="/">
              <ButtonStyle primary>Powrót</ButtonStyle>
            </Link>
          </div>
        </ContainerSmall>
      </GeneralLayout>
    </>
  );
};

export default NotFoundPage;
