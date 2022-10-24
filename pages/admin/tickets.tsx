import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import useSWR from "swr";
import instance, { SWRfetcher } from "../../axios-config";
import Tickets from "../../components/admin/tickets";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import { appActions } from "../../stores/appSlice";

const AdminTickets: NextPage = (props: any) => {
  const { data, error } = useSWR("/admin/ticket", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  const dispatch = useAppDispatch();

  dispatch(appActions.addAdminTickets(data.data));

  return (
    <Layout>
      <Head>
        <title>تیکت ها</title>
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
        destination: "/",
        permanent: false,
      },
    };
  }

  // const res = await instance.get("/admin/ticket", {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`,
  //   },
  // });

  // const tickets = res.data;

  return {
    props: {},
  };
}

export default AdminTickets;
