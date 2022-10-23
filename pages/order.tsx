import { NextPage } from "next";
import Head from "next/head";
import instance from "../axios-config";
import Layout from "../components/layout/layout";
import OrderSim from "../components/order";

const Order: NextPage = (props: any) => {
  return (
    <Layout>
      <Head>
        <title>{`سفارش ${props.simcart.phoneNumber.replace(/\s/g, "")}`}</title>
      </Head>
      <OrderSim simcart={props.simcart} />
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

export default Order;
