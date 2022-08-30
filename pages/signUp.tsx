import type { NextPage } from "next";
import SignUp from "../components/authentication/signUp";
import Layout from "../components/layout/layout";

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;
