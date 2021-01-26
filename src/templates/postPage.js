import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Heading from '../components/heading';


export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: {slug: {eq: $slug}}) {
            frontmatter {
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
            <Heading>{props.data.markdownRemark.frontmatter.title}</Heading>
            <div className="post-page" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
    </Layout>
)

export default PostPage;