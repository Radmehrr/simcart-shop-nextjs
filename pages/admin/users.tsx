import { NextPage } from "next";
import Users from "../../components/admin/users";
import Layout from "../../components/layout/layout";

const AdminUsers: NextPage = () => {
  return (
    <Layout>
      <Users />
    </Layout>
  );
};

export default AdminUsers;
