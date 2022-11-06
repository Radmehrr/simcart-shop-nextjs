import type { NextPage } from "next";
import Layout from "../components/layout/layout";
import Profile from "../components/profile/profile";

const ProfilePage: NextPage = () => {
  return (
    <Layout>
      <Profile />
    </Layout>
  );
};

export default ProfilePage;
