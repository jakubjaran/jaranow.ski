import React from 'react';
import Img from 'gatsby-image';
import { graphql, useStaticQuery } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/layout';
import Heading from '../components/heading';


const About = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "photoOfMe.jpg"}) {
                childImageSharp {
                    fluid(maxWidth:200, quality: 100) {
                        ...GatsbyImageSharpFluid
                    }
                    original {
                        width
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <Head title="O mnie" />
            <Heading>O mnie</Heading>
            <div className="mr-4" style={{ width: '40vw', maxWidth: '200px', float: 'left' }}>
                <Img style={{ borderRadius: '6px' }} fluid={data.file.childImageSharp.fluid} />
            </div>
            <div>
                <p>Nazywam się <strong>Jakub Jaranowski</strong>, mam 22 lata. Informatyka to moja pasja. Odkąd pamiętam interesowały mnie komputery i byłem ciekaw jak działają programy, z których korzystam na co dzień.</p>
                <p>Moja przygoda z informatyką zaczęła się, pewnie jak u wielu osób - od gier. Uwielbiałem grać w gry. Jednak po paru latach pragnąłem czegoś więcej. Pierwsza instalacja Windowsa, pierwsza wymiana podzespołów... I tak zostałem "rodzinnym informatykiem", specjalistą od zadań specjalnych :)</p>
                <p><strong>Jestem samoukiem</strong>. Nie jestem profesjonalistą, ale chcę nim zostać. Szybko uczę się nowych rzeczy, zwłaszcza tych, które mnie interesują.</p>
                <p>W wolnym czasie lubię tworzyć różne projekty, np. takie jak ten blog. Programowanie sprawia mi dużą frajdę.</p>
            </div>
        </Layout>
    );
};

export default About;