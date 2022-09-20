import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Contact from "../components/contact-us";
import { useAppSelector } from "../components/hooks/hook";
import Layout from "../components/layout/layout";

const ContactUs: NextPage = () => {
  const router = useRouter();
  const login = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (!login) {
      router.replace("/login");
    }
  }, []);

  return (
    <Layout>
      <Contact />
    </Layout>
  );
};

export default ContactUs;
