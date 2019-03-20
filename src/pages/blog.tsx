import * as React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";

import Layout from "../components/layouts/Default";
import SEO from "../components/SEO";
import Container from "../components/styled/Container";

export const query = graphql`
  query Posts {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            path
            title
            description
            date
          }
        }
      }
    }
  }
`;

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          id: string;
          frontmatter: {
            description: string;
            path: string;
            title: string;
            date: string;
          };
        };
      }[];
    };
  };
}

const Blog: React.FC<Props> = ({ data }) => (
  <>
    <SEO />
    <Layout>
      <Container>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id}>
            <h3>
              <Link to={node.frontmatter.path}>{node.frontmatter.title}</Link>
            </h3>
            {node.frontmatter.description}
          </article>
        ))}
      </Container>
    </Layout>
  </>
);

export default Blog;
