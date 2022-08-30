import type { GetServerSideProps, NextPage } from "next";
import SignUp from "../components/authentication/signUp";
import Layout from "../components/layout/layout";

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <SignUp />
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

export default SignUpPage;
