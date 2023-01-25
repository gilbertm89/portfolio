import "./styles.css";

import Layout from "./layout";
import { Fragment } from "react";
import { Developer } from "./developer";

function App() {
  return (
    <Fragment>
      <Developer />
      <Layout />
    </Fragment>
  );
}

export default App;
