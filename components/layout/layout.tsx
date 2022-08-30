import Footer from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="bakhMedium bg-gradient-to-l from-purple-200 via-purple-100 to-purple-50 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-900 dark:to-black min-h-screen">
      <section>
        <Navbar />
      </section>
      <section>{children}</section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
