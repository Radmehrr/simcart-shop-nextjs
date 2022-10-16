import { NextPage } from "next";
import React from "react";
import AddSimcart from "../../components/admin/add-simcart";
import Layout from "../../components/layout/layout";

const AdminSimcarts: NextPage = () => {
  return (
    <Layout>
      <AddSimcart />
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

  return {
    props: {},
  };
}

export default AdminSimcarts;
