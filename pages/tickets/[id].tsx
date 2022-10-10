import { NextPage } from "next";
import instance from "../../axios-config";
import Layout from "../../components/layout/layout";
import TicketItem from "../../components/tickets/ticket-item";

const TicketItemPage: NextPage = (props: any) => {
  return (
    <Layout>
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
