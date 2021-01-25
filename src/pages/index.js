import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

import Layout from "../components/layout";
import Post from "../components/post";
import Head from "../components/head";

const Home = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark
        (sort: { fields: [frontmatter___date], order: DESC })
        {
        nodes {
          frontmatter {
            title
            date
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
      <Head />
      <div className="py-6">
        {posts.length > 0 ? posts.map(post => (
          <Post key={post.fields.slug} post={post} />
        )) : <h2>Jeszcze nic tu nie ma!</h2>}
      </div>
    </Layout>
  );
}

export default Home;