import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import instance, { SWRfetcher } from "../../axios-config";
import { useAppDispatch } from "../../components/hooks/hook";
import SimItem from "../../components/item";
import Layout from "../../components/layout/layout";
import Loading from "../../components/loading";
import { appActions } from "../../stores/appSlice";

const Simcart: NextPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const id = router.query.id;

  const { data, error } = useSWR(`/user/simcart?simcartId=${id}`, SWRfetcher);
  if (error) return <div>Failed to load!</div>;
  if (!data) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  dispatch(appActions.addSimcart(data.data.simcarts[0]));

  return (
    <Layout>
      <Head>
        <title>{`سیمکارت ${data.data.simcarts[0].phoneNumber.replace(
          /\s/g,
          ""
        )}`}</title>
      </Head>
      <SimItem />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  // const res = await instance.get("/user/simcart", {
  //   params: {
  //     simcartId: id,
  //   },
  // });
  // const simcart = res.data.simcarts[0];
  return {
    props: {},
  };
}

export default Simcart;
