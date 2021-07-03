import { graphql, useStaticQuery } from 'gatsby';
import * as React from 'react';

// markup
const IndexPage = () => {
  const projects = useStaticQuery(graphql`
    query Projects {
      allContentfulProject {
        edges {
          node {
            title
          }
        }
      }
    }
  `).allContentfulProject.edges;
  console.log(projects);
  return (
    <main className="p-4 text-blue-900 text-lg font-bold">
      <h1>Hello World</h1>
      <ul>
        {/* {projects.map(({node}) => <li>{node.title}<li>)} */}
        {projects.map(({node: {title}}) => (
          <li>{title}</li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;
