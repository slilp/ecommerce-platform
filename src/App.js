import logo from "./logo.svg";
import "./App.css";
import { Switch } from "react-router-dom";
import Layout from "./layout";
import ScrollToTop from "./common/components/scroll-to-top";

function App() {
  return (
    <>
      <ScrollToTop></ScrollToTop>
      <Switch>
        <Layout></Layout>
      </Switch>
    </>
  );
}

export default App;
