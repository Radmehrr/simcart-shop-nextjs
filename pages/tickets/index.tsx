import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useSWR from "swr";
import { SWRfetcher } from "../../axios-config";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import Tickets from "../../components/tickets";
import { appActions } from "../../stores/appSlice";

const TicketsPage: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  const { data, error } = useSWR("/user/ticket", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  dispatch(appActions.addTickets(data.data));

  return (
    <Layout>
      <Head>
        <title>ارتباط با ما</title>
      </Head>
      <Tickets />
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

export default TicketsPage;
