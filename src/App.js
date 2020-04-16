import React, { Component } from "react";
import Router from "./Router";

import Layout from "./hoc/Layout/Layout";
import NavigationBars from "./components/core/navigationBars";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <NavigationBars />
          <Router />
        </Layout>
      </div>
    );
  }
}

export default App;
