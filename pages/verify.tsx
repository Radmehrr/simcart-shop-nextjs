import type { GetServerSideProps, NextPage } from "next";
import Verify from "../components/authentication/verify";
import Layout from "../components/layout/layout";

const VerifyPage: NextPage = ({phoneNumber}:any) => {
  console.log(phoneNumber)
  return (
    <Layout>
      <Verify phoneNumber={phoneNumber} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const phoneNumber = context.req.cookies["phoneNumber"];

  if (!phoneNumber) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
        phoneNumber,
      },
    };
  }
};

export default VerifyPage;
