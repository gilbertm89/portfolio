import { Content } from "../content";
import { Header } from "../header";
import { Sidebar } from "../sidebar";
import "./layout.styles.css";

export default function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="h-h100vh overflow-hidden">
        <Header />
        {/* <Content /> */}
      </div>
    </div>
  );
}
