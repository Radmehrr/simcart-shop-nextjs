import { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import { SWRfetcher } from "../../axios-config";
import Users from "../../components/admin/users";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import { appActions } from "../../stores/appSlice";

const AdminUsers: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  const { data, error } = useSWR("/admin/users", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );

  dispatch(appActions.addUsers(data.data));

  return (
    <Layout>
      <Head>
        <title>کاربران</title>
      </Head>
      <Users />
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

export default AdminUsers;
