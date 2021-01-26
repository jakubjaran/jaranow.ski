import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

import './postPage.scss';

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
            <h1 className="title has-text-primary pb-4">{props.data.markdownRemark.frontmatter.title}</h1>
            <div className="post-page" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </div>
    </Layout>
)

export default PostPage;