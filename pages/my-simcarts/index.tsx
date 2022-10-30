import type { GetServerSideProps, NextPage } from "next";
import useSWR from "swr";
import { SWRfetcher } from "../../axios-config";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import MySimcarts from "../../components/my-simcarts";
import { appActions } from "../../stores/appSlice";

const MySimcartsPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useSWR("/user/simcart/my-simcarts", SWRfetcher);
  if (error) return <div>failed to load</div>;
  if (!data)
    return (
      <div>
        <Loading />
      </div>
    );
  dispatch(appActions.addMySimcarts(data.data));
  return (
    <Layout>
      <MySimcarts />
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
    return {
      props: {},
    };
  }
}

export default MySimcartsPage;
