import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';

const Page404 = () => (
    <Layout>
        <Head title="Błędny adres!" />
        <h2>Ooops chyba się zgubiłeś!</h2>
    </Layout>
);

export default Page404;