import Head from "next/head";
import React, { useEffect } from "react";
import instance from "../../../axios-config";
import TicketItem from "../../../components/admin/tickets/item";
import { useAppDispatch } from "../../../components/hooks/hook";
import Layout from "../../../components/layout/layout";
import { appActions } from "../../../stores/appSlice";

const AdminTicketItem = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addAdminTicketItem(props.ticket));
    dispatch(appActions.addMessage(props.ticket.messages));
  }, []);

  return (
    <Layout>
      <Head>
        <title>{props.ticket.subject}</title>
      </Head>
      <TicketItem ticket={props.ticket} />
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
  const ticketId = context.query.ticketId;
  const res = await instance.get("/admin/ticket", {
    params: {
      ticketId,
    },
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const ticket = res.data[0];

  return {
    props: { ticket },
  };
}

export default AdminTicketItem;
