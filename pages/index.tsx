import type { GetServerSideProps, NextPage } from "next";
import HomeSimcart from "../components/home";
import Layout from "../components/layout/layout";

const Home: NextPage = (props: any) => {
  return (
    <Layout>
      <HomeSimcart />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const phoneNumber = context.req.cookies["phoneNumber"];
  const accessToken = context.req.cookies["accessToken"];

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

export default Home;
