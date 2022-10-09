import { NextPage } from "next";
import instance from "../../axios-config";
import Layout from "../../components/layout/layout";
import TicketItem from "../../components/tickets/ticket-item";

const TicketItemPage: NextPage = () => {
  return (
    <Layout>
      <TicketItem />
    </Layout>
  );
};

// export async function getServerSideProps(context: any) {
//   const id = context.query.id;
//   const res = await instance.get("/user/ticket", {
//     params: {
//       ticketId: id,
//     },
//   });
//   const simcart = res.data.simcarts[0];
//   return {
//     props: { simcart },
//   };
// }

export default TicketItemPage;
