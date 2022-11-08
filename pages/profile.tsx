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

export async function getServerSideProps(context: any) {
  const accessToken = context.req.cookies["accessToken"];
  if (!accessToken) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default ProfilePage;
