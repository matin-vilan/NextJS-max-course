import ContactForm from "../components/contact/contact-form";
import { Fragment } from "react";
import Head from "next/head";

function Contact() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="send me your message ... " />
      </Head>
      <ContactForm />
    </Fragment>
  );
}

export default Contact;
