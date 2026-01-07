import { Outlet } from "react-router-dom";
// import "@styles/root.css";
import { AuthProvider } from "@context/AuthContext";
import Sidebar from "../components/Sidebar";
import { DUSidebar } from "../components/daisyUI/DUSidebar.jsx";

function Root() {
  return (
    <AuthProvider>
      <PageRoot />
    </AuthProvider>
  );
}

function PageRoot() {
  const pageContent = () => {
    return (
      <div className="page-content">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="page-root">
      <DUSidebar PageContent={pageContent}></DUSidebar>
      <Sidebar />
    </div>
  );
}

export default Root;
