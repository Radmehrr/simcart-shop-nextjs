import type { NextPage } from "next";
import Verify from "../components/authentication/verify";
import Layout from "../components/layout/layout";

const VerifyPage: NextPage = () => {
  return (
    <Layout>
      <Verify />
    </Layout>
  );
};

export default VerifyPage;
