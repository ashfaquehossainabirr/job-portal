import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
      <div className="p-10 text-center bg-gray-800 mt-10">
        Developed By <a href="https://www.facebook.com/ashfaquehossain.abir/">Ashfaque Hossain Abir</a>
      </div>
    </div>
  );
};

export default AppLayout;
