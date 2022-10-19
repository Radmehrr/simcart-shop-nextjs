import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Contact from "../../components/contact-us";
import Layout from "../../components/layout/layout";

const Create: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ایجاد تیکت جدید</title>
      </Head>
      <Contact />
    </Layout>
  );
};

export default Create;
