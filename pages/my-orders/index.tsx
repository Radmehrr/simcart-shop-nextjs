import { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { SWRfetcher } from "../../axios-config";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import MyOrders from "../../components/my-orders";

const MyOrder: NextPage = (props: any) => {
  const { data, error } = useSWR("/user/order", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <Layout>
      <Head>
        <title>سفارش ها</title>
      </Head>
      <MyOrders orders={data.data} />
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
  } else {
    return {
      props: {},
    };
  }
}

export default MyOrder;
