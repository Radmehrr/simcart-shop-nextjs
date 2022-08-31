import Footer from "./footer";
import { Navbar } from "./navbar";

const Layout = ({ children }: any) => {
  return (
    <div className="bakhMedium bg-gradient-to-b from-purple-50 via-purple-150 to-purple-200 dark:bg-gradient-to-r dark:from-slate-800 dark:via-slate-800 dark:to-slate-800 min-h-screen">
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
