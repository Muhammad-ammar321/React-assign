import { Outlet } from "react-router";
import FooterSas from "./Footer-sas";
import NavbarSas from "./Navbar-sas";

const Layout=()=> {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarSas />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FooterSas />
    </div>
  );
}
export default Layout