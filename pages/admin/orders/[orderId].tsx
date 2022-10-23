import { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import instance from "../../../axios-config";
import OrderItem from "../../../components/admin/orders/item";
import { useAppDispatch } from "../../../components/hooks/hook";
import Layout from "../../../components/layout/layout";
import { appActions } from "../../../stores/appSlice";

const AdminOrderItem: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addOrderItem(props.order));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{`سفارش ${props.order.simcart.phoneNumber.replace(
          /\s/g,
          ""
        )}`}</title>
      </Head>
      <OrderItem order={props.order} />
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
  const orderId = context.query.orderId;
  const res = await instance.get("/admin/order", {
    params: {
      orderId,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const order = res.data[0];

  return {
    props: { order },
  };
}

export default AdminOrderItem;
