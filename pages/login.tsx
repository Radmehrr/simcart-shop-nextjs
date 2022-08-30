import type { NextPage } from "next";
import Login from "../components/authentication/login";
import Layout from "../components/layout/layout";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Login />
    </Layout>
  );
};

export default LoginPage;
