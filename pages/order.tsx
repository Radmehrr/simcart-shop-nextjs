import { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { SWRfetcher } from "../axios-config";
import Layout from "../components/layout/layout";
import Loading from "../components/loading";
import OrderSim from "../components/order";

const Order: NextPage = (props: any) => {
  const id = props.id;
  const { data, error } = useSWR(`/user/simcart?simcartId=${id}`, SWRfetcher);
  if (error) return <div>Failed to load!</div>;
  if (!data) return <Loading />;
  const title = data?.data.simcarts[0].phoneNumber;
  const simcart = data?.data.simcarts[0];

  return (
    <Layout>
      <Head>
        <title>{`سفارش ${title.replace(/\s/g, "")}`}</title>
      </Head>
      <OrderSim simcart={simcart} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const accessToken = context.req.cookies["accessToken"];
  if (!accessToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const id = context.query.id;

  return {
    props: { id },
  };
}

export default Order;
