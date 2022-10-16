import { NextPage } from "next";
import instance from "../../axios-config";
import Layout from "../../components/layout/layout";

const AdminTickets: NextPage = () => {
  return (
    <Layout>
      <div>admin tickets</div>
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

  return {
    props: {},
  };
}

export default AdminTickets;
