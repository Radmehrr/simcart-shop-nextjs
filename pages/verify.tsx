import Cookies from "js-cookie";
import type { GetServerSideProps, NextPage } from "next";
import Verify from "../components/authentication/verify";
import Layout from "../components/layout/layout";

const VerifyPage: NextPage = () => {
  const phoneNumber = Cookies.get("phoneNumber")
  console.log(phoneNumber)
  return (
    <Layout>
      <Verify phoneNumber={phoneNumber} />
    </Layout>
  );
};


export default VerifyPage;
