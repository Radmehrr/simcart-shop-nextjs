import { NextPage } from "next";
import Head from "next/head";
import instance from "../../axios-config";
import SimItem from "../../components/item";
import Layout from "../../components/layout/layout";

const Simcart: NextPage = (props: any) => {
  return (
    <Layout>
      <Head>
        <title>{`سیمکارت ${props.simcart.phoneNumber.replace(
          /\s/g,
          ""
        )}`}</title>
      </Head>
      <SimItem simcart={props.simcart} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await instance.get("/user/simcart", {
    params: {
      simcartId: id,
    },
  });
  const simcart = res.data.simcarts[0];
  return {
    props: { simcart },
  };
}

export default Simcart;
