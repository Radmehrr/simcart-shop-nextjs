import { NextPage } from "next";
import Head from "next/head";
import AboutUs from "../../components/about-us";
import Layout from "../../components/layout/layout";

const AboutUsPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>درباره ما | آشنایی با ما</title>
      </Head>
      <AboutUs />
    </Layout>
  );
};

export default AboutUsPage;
