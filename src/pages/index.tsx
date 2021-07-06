import * as React from 'react';
import {Helmet} from 'react-helmet'
import GeneralLayout from '../components/layout/GeneralLayout';
import ContainerSmall from '../components/container/ContainerSmall';
import ScrollDownIndicator from '../components/ui/ScrollDownIndicator';
import Button from '../components/ui/Button';

const IndexPage = () => {
  return (
    <>
    <Helmet>
      <title>Marta Krawczyk</title>
    </Helmet>
    <GeneralLayout>
      <ContainerSmall>
        <h1>hello world</h1>
        <div className="space-x-4">
          <Button primary>Primary</Button>
          <Button>Secondary</Button>
        </div>
        <ScrollDownIndicator />
      </ContainerSmall>
    </GeneralLayout>
    </>
  );
};

export default IndexPage;
