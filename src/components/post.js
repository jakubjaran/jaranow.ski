import React from 'react';
import { Link } from 'gatsby';

const Post = ({ post }) => (
    <div className="card my-3 p-6 has-background-black has-text-light">
        <header className="card-header px-6 py-4">
            <Link className="has-text-primary has-text-weight-semibold is-size-3" to={`/posty/${post.fields.slug}`}>{post.frontmatter.title}</Link>
        </header>
        <div clasName="card-content">
            <div className="px-6 py-3">
                <p>{post.frontmatter.snippet}</p>
                <Link className="button is-primary is-outlined mt-5 px-6" to={`/posty/${post.fields.slug}`}>Czytaj</Link>
            </div>
        </div>
    </div>
);

export default Post;