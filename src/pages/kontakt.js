import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';
import Heading from '../components/heading';

const Contact = () => (
    <Layout>
        <Head title="Kontakt" />
        <Heading>Kontakt</Heading>
        <p>Zapraszam do kontaktu mailowo: <a className="has-text-primary" href="mailto:jakubjaran@gmail.com">jakubjaran@gmail.com</a> lub przez formularz poniżej :)</p>
        <div className="card my-6 py-4 has-background-black has-text-light">
            <div className="card-content">
                <div className="px-5">
                    <form name="contact" method="POST" data-netlify="true">
                        <div className="field">
                            <label className="label has-text-primary">Kim jesteś?</label>
                            <div className="control">
                                <input className="input" type="text" name="name" placeholder="Imię" required />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-primary">Twój email</label>
                            <div className="control">
                                <input className="input" type="email" name="email" placeholder="Email" required />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label has-text-primary">Wiadomość</label>
                            <div className="control">
                                <textarea className="textarea" placeholder="Wiadomość" name="message" required></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button className="button is-primary has-text-weight-bold">Wyślij</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>


    </Layout>
);

export default Contact;