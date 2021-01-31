import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/SEO';
import Heading from '../components/heading';

const Contact = () => (
  <Layout>
    <SEO
      title="Kontakt"
      description="Zapraszam do kontaktu mailowo: jakubjaran@gmail.com lub przez formularz na stronie!"
    />
    <Heading>Kontakt</Heading>
    <p>
      Zapraszam do kontaktu mailowo:{' '}
      <a className="has-text-primary" href="mailto:jakubjaran@gmail.com">
        jakubjaran@gmail.com
      </a>{' '}
      lub przez formularz poniżej :)
    </p>
    <div className="card my-6 py-4 has-background-black has-text-light">
      <div className="card-content">
        <div className="px-5">
          <form
            name="contact"
            method="POST"
            action="/success"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="field">
              <label className="label has-text-primary">
                Kim jesteś?
                <div className="control mt-2">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Imię"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label has-text-primary">
                Twój email
                <div className="control mt-2">
                  <input
                    className="input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </label>
            </div>
            <div className="field">
              <label className="label has-text-primary">
                Wiadomość
                <div className="control mt-2">
                  <textarea
                    className="textarea"
                    placeholder="Wiadomość"
                    name="message"
                    required
                  ></textarea>
                </div>
              </label>
            </div>
            <div className="field">
              <div className="control mt-5">
                <button className="button is-primary has-text-weight-bold">
                  Wyślij
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);

export default Contact;
