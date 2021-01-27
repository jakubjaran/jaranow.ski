import React from 'react';
import Head from '../components/head';
import Layout from '../components/layout';
import Heading from '../components/heading';

const About = () => (
    <Layout>
        <Head title="O mnie" />
        <Heading>O mnie</Heading>
        <p>Witaj na moim blogu!</p>
        <p>Nazywam się <strong>Jakub Jaranowski</strong>. Informatyka to moja pasja. Odkąd pamiętam interesowały mnie komputery i byłem ciekaw jak działają programy, z których korzystam na co dzień.</p>
        <p>Moja przygoda z informatyką zaczęła się, pewnie jak u wielu osób - od gier. Uwielbiałem grać w gry. Jednak po paru latach pragnąłem czegoś więcej. Pierwsza instalacja Windowsa, pierwsza wymiana podzespołów... I tak zostałem "rodzinnym informatykiem", specjalistą od zadań specjalnych :)</p>
        <p><strong>Jestem samoukiem</strong>. Nie jestem profesjonalistą, ale chcę nim zostać. Szybko uczę się nowych rzeczy, zwłaszcza tych, które mnie interesują.</p>
        <p>W wolnym czasie lubię tworzyć różne projekty, np. takie jak ten blog. Programowanie sprawia mi dużą frajdę.</p>
    </Layout>
);

export default About;