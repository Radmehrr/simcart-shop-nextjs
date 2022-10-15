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

export default AdminSimcarts;
