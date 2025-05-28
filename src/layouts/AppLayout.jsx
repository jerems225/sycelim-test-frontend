import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";



const excludedRoutes = ["/login", "/signup", "/forgot-password"];

const AppLayout = () => {
  const location = useLocation();
  const hideHeaderFooter = excludedRoutes.includes(location.pathname);

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default AppLayout;
