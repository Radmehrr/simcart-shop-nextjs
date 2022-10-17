import { NextPage } from "next";
import { useEffect } from "react";
import instance from "../../axios-config";
import Tickets from "../../components/admin/tickets";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import { appActions } from "../../stores/appSlice";

const AdminTickets: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addAdminTickets(props.tickets));
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
        destination: "/",
        permanent: false,
      },
    };
  }

  const res = await instance.get("/admin/ticket", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const tickets = res.data;

  return {
    props: { tickets },
  };
}

export default AdminTickets;
