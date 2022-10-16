import { NextPage } from "next";
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
      <OrderItem />
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
  console.log(order);

  return {
    props: { order },
  };
}

export default AdminOrderItem;
