import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <Outlet /> {/* ✅ This renders the page content */}
      </div>
    </div>
  );
}
