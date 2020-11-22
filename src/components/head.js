import React from 'react';
import Helmet from 'react-helmet';

const Head = ({title}) => (
    <Helmet>
        {title ? <title>{`${title} - jaranow.ski`}</title> : <title>jaranow.ski</title>}
        <link rel="icon" type="image/svg" href="/favicon.svg" sizes="16x16" />
    </Helmet>
);

export default Head;