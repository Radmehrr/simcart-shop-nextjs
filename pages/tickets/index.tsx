import { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import instance from "../../axios-config";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Tickets from "../../components/tickets";
import { appActions } from "../../stores/appSlice";

const TicketsPage: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addTickets(props.tickets));
  }, []);

  return (
    <Layout>
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
