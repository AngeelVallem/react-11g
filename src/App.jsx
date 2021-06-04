import React from "react";

import AppLoading from "./components/AppLoading";
import Header from "./components/Header";
import SideNavLeft from "./components/SideNavLeft";
import SideNavRight from "./components/SideNavRight";
import Posts from "./components/Posts";
import Counter from "./components/Counter";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="container">
          <div className="row">
            <SideNavLeft />

            <main className="col-8">
              <Posts />
              <Counter />
            </main>

            <SideNavRight />
          </div>
        </div>
        <AppLoading />
        ∏∏
      </div>
    );
  }
}

export default App;
