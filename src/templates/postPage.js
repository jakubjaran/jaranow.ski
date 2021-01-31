import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Heading from '../components/heading';

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        snippet
      }
      html
    }
  }
`;

const PostPage = props => (
  <Layout>
    <SEO
      title={props.data.markdownRemark.frontmatter.title}
      description={props.data.markdownRemark.frontmatter.snippet}
      article
    />
    <div>
      <Heading>{props.data.markdownRemark.frontmatter.title}</Heading>
      <div
        className="post-page"
        dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
      ></div>
    </div>
  </Layout>
);

export default PostPage;
