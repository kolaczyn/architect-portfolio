import { graphql, useStaticQuery } from 'gatsby';

const useEmailLink = () => {
  const { contentfulEmailAddress } = useStaticQuery(graphql`
    query Emailaddress {
      contentfulEmailAddress {
        emailAddress
      }
    }
  `);
  const { emailAddress } = contentfulEmailAddress;

  return `mailto:${emailAddress}`;
};

export default useEmailLink;
