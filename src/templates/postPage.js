import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
                date
                title
            }
            html
        }
    }
`

const PostPage = (props) => (
    <Layout>
        <Head title={props.data.markdownRemark.frontmatter.title} />
        <div>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
    </Layout>
)

export default PostPage;