import { NextPage } from "next";
import Contact from "../components/contact-us";
import Layout from "../components/layout/layout";

const ContactUs: NextPage = () => {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactUs;
