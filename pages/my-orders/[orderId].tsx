import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import { SWRfetcher } from "../../axios-config";
import OrderItem from "../../components/admin/orders/item";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import { appActions } from "../../stores/appSlice";

const OrderItemPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const orderId = router.query.orderId;

  const { data, error } = useSWR(`/user/order?orderId=${orderId}`, SWRfetcher);
  if (error) return <div>Failed to load!</div>;
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  dispatch(appActions.addOrderItem(data.data[0]));
  return (
    <Layout>
      <Head>
        <title>{`سیمکارت ${data.data[0].simcart.phoneNumber.replace(
          /\s/g,
          ""
        )}`}</title>
      </Head>
      <OrderItem />
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

export default OrderItemPage;
