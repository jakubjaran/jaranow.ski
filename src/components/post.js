import React from 'react';
import style from './post.module.scss';
import {Link} from 'gatsby'

const Post = ({post}) => (
    <div className={style.post}>
        <Link to={`/posty/${post.fields.slug}`} className={style.link}>{post.frontmatter.title}</Link>
        <p className={style.date}>{post.frontmatter.date}</p>
        <p>{post.frontmatter.snippet} <Link to={`/posty/${post.fields.slug}`}>Czytaj dalej</Link></p>
    </div>
);

export default Post;