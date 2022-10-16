import { NextPage } from "next";
import { useEffect } from "react";
import instance from "../../axios-config";
import Users from "../../components/admin/users";
import { useAppDispatch } from "../../components/hooks/hook";
import Layout from "../../components/layout/layout";
import { appActions } from "../../stores/appSlice";

const AdminUsers: NextPage = (props: any) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(appActions.addUsers(props.users));
  }, []);

  return (
    <Layout>
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
  const res = await instance.get("/admin/users", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  const users = res.data;
  return {
    props: { users },
  };
}

export default AdminUsers;
