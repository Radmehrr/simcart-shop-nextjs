import Footer from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-gradient-to-tr from-purple-200 via-purple-400 to-purple-800 dark:bg-gradient-to-bl dark:from-gray-700 dark:via-gray-900 dark:to-black h-96">
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
