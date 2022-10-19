import { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";
import instance from "../../axios-config";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import TicketItem from "../../components/tickets/ticket-item";
import { appActions } from "../../stores/appSlice";

const TicketItemPage: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addTicket(props.ticket));
    dispatch(appActions.addMessage(props.ticket.messages));
  }, []);
  return (
    <Layout>
      <Head>
        <title>{`${props.ticket.subject}`}</title>
      </Head>
      <TicketItem ticket={props.ticket} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const accessToken = context.req.cookies["accessToken"];

  const id = context.query.id;
  const res = await instance.get(`/user/ticket/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const ticket = res.data[0];

  return {
    props: { ticket },
  };
}

export default TicketItemPage;
