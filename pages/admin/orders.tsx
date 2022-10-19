import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import instance from "../../axios-config";
import Orders from "../../components/admin/orders";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import { appActions } from "../../stores/appSlice";

const AdminOrders: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addOrders(props.orders));
  }, []);

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
  const res = await instance.get("/admin/order", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const orders = res.data;

  return {
    props: { orders },
  };
}

export default AdminOrders;
