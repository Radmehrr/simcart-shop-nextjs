import { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import instance, { SWRfetcher } from "../../axios-config";
import Orders from "../../components/admin/orders";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import { appActions } from "../../stores/appSlice";

const AdminOrders: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  const { data, error } = useSWR("/admin/order", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  dispatch(appActions.addOrders(data.data));

  return (
    <Layout>
      <Head>
        <title>سفارش ها</title>
      </Head>
      <Orders />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const accessToken = context.req.cookies["accessToken"];
  if (!accessToken) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  // const res = await instance.get("/admin/order", {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });
  // const orders = res.data;

  return {
    props: {},
  };
}

export default AdminOrders;
