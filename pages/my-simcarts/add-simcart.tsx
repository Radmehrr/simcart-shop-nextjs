import type { NextPage } from "next";
import Layout from "../../components/layout/layout";
import UserAddSimcart from "../../components/my-simcarts/user-add-simcart";

const AddSimcart: NextPage = () => {
  return (
    <Layout>
      <UserAddSimcart />
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

export default AddSimcart;
