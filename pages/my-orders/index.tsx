import { NextPage } from "next";
import instance from "../../axios-config";
import Layout from "../../components/layout/layout";
import MyOrders from "../../components/my-orders";

const MyOrder: NextPage = (props: any) => {
  return (
    <Layout>
      <MyOrders orders={props.orders} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const accessToken = context.req.cookies["accessToken"];

  const res = await instance.get("/user/order", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const orders = res.data;
  return {
    props: { orders },
  };
}

export default MyOrder;
