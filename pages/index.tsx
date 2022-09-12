import type { GetServerSideProps, NextPage } from "next";
import HomeSimcart from "../components/home";
import Layout from "../components/layout/layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <HomeSimcart />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const phoneNumber = context.req.cookies["phoneNumber"];

  if (phoneNumber) {
    return {
      redirect: {
        destination: "/verify",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

export default Home;

// export enum RondTypeEnum {
//   NORMAL = 'معمولی',
//   SEVENRY = 'رند ۷ رقم یکی',
//   SEXRYE = 'رند ۶ رقم یکی از اخر',
//   SEXRYS = 'رند ۶ رقم یکی از اول',
//   MELLION = 'رند میلیونی',
//   TENTE = 'رند ده هزاری از اخر',
//   TENTS = 'رند ده هزاری از اول',
//   THREEPE = 'رند ۳ جفت از اخر',
//   THREEPS = 'رند ۳ جفت از اول',
//   TOWR = 'رند متشکل از دو رقم',
//   FIVERE = 'رند ۵ رقم یکی از اخر',
//   FIVERS = 'رند ۵ رقم یکی از اول',
//   SADDARSADI = 'رند صد درصدی',
//   GOFTARI = 'رند گفتاری',
//   TE = 'رند هزاری از اخر',
//   TS = 'رند هزاری از اول',
//   FOURRE = 'رند ۴ رقم یکی از اخر',
//   FOURRS = 'رند ۴ رقم یکی از اول',
//   FOURRM = 'رند ۴ رقم یکی از وسط',
//   TENTENE = 'رند ده دهی از اخر',
//   TENTENS = 'رند ده دهی از اول',
//   THREEPELE = 'رند ۳ پله',
//   PPE = 'رند جفت جفت از اخر',
//   PPS = 'رند جفت جفت از اول',
//   THREEYS = 'رند ۳ رقم یکی از اول',
//   IPS = 'رند تکرار پیش شماره',
//   TARAZOEI = 'رند ترازویی',
//   PELEIE = 'رند پله‌ای از اخر',
//   PELEIS = 'رند پله‌ای از اول',
//   THREERE = 'رند ۳ رقم یکی از اخر',
//   TARTIBIEND = 'رند ترتیبی از اخر',
//   TARTIBISTART = 'رند ترتیبی از اول',
//   AYNEI = 'رند آینه‌ای',
// }
