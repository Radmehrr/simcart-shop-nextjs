import { GetServerSideProps, NextPage } from "next";
import instance from "../../axios-config";
import Layout from "../../components/layout/layout";
import Tickets from "../../components/tickets";

const TicketsPage: NextPage = (props: any) => {
  return (
    <Layout>
      <Tickets tickets={props.tickets} />
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
    const res = await instance.get("/user/ticket", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const tickets = res.data;

    return {
      props: { tickets },
    };
  }
}

export default TicketsPage;
