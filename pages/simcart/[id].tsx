import { NextPage } from "next";
import instance from "../../axios-config";
import SimItem from "../../components/item";
import Layout from "../../components/layout/layout";

const Simcart: NextPage = (props: any) => {
  return (
    <Layout>
      <SimItem simcart={props.simcart} />
    </Layout>
  );
};

export async function getServerSideProps(context: any) {
  const id = context.query.id;
  const res = await instance.get("/user/simcart", {
    params: {
      simcartId: id,
    },
  });
  const simcart = res.data.simcarts[0];
  return {
    props: { simcart },
  };
}

export default Simcart;
