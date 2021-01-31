import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import Post from '../components/post';
import SEO from '../components/SEO';

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___id], order: DESC }) {
        nodes {
          frontmatter {
            title
            subtitle
            id
            snippet
          }
          fields {
            slug
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        {posts.length > 0 ? (
          posts.map(post => <Post key={post.fields.slug} post={post} />)
        ) : (
          <h2>Jeszcze nic tu nie ma!</h2>
        )}
      </div>
    </Layout>
  );
};

export default Home;
