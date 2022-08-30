import type { GetServerSideProps, NextPage } from "next";
import Login from "../components/authentication/login";
import Layout from "../components/layout/layout";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const phoneNumber = context.req.cookies["phoneNumber"];

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
