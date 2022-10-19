import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import Login from "../components/authentication/login";
import Layout from "../components/layout/layout";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>ورود به سیمکارت بازار</title>
      </Head>
      <Login />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const phoneNumber = context.req.cookies["phoneNumber"];
  const accessToken = context.req.cookies["accessToken"];

  if (accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  if (phoneNumber) {
    return {
      redirect: {
        destination: "/verify",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default LoginPage;
