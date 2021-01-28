import "./App.css";
import { Switch } from "react-router-dom";
import Layout from "./layout";
import ScrollToTop from "./common/components/scroll-to-top";

function App() {
  return (
    <div>
       <ScrollToTop></ScrollToTop>
       <Switch>
          <Layout></Layout>
       </Switch>

    </div>
  );
}

export default App;
