import { Content } from "../content";
import { Header } from "../header";
import "./layout.styles.css";

export default function Layout() {
  return (
    <div className="layout">
      <div className="sidebar">
        <div className="social">Social</div>
      </div>
      <div className="main overflow-hidden">
        <Header />
        <Content />
      </div>
    </div>
  );
}
