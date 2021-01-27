import logo from "./logo.svg";
import "./App.css";
import 'antd/dist/antd.css';
import './common/scss/fonts.scss';
import './common/scss/layout.scss';
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
