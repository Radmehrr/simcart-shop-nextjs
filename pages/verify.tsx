import Cookies from "js-cookie";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Verify from "../components/authentication/verify";
import Layout from "../components/layout/layout";

const VerifyPage: NextPage = () => {
  const phoneNumber = Cookies.get("phoneNumber");
  return (
    <Layout>
      <Head>
        <title>تایید شماره موبایل</title>
      </Head>
      <Verify phoneNumber={phoneNumber} />
    </Layout>
  );
};

export default VerifyPage;
