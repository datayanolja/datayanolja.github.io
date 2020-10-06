import React, { Component } from "react";
import Logo from "./components/Header/Logo";
import Menu from "./components/Header/Menu";
import Speaker from "./components/Speaker/Speaker";
import Main from "./components/Main/Main";
import Coc from "./components/Coc/coc";
import Program from "./components/Program/Program";
import Archieve from "./components/Archieve/Archieve";
import Concept from "./components/Concept/Concept";
import Partners from "./components/Partners/Partners";
import Members from "./components/Members/Members";
import MobileMenu from "./components/Header/mobileMenu";
import "./App.css";
import "./font/font.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "main",
      clicked: "clicked",
    };
  }

  render() {
    // console.log('App render');
    var _article = null;

    if (this.state.mode === "main") {
      _article = <Main></Main>;
    } else if (this.state.mode === "speaker") {
      _article = <Speaker></Speaker>;
    } else if (this.state.mode === "coc") {
      _article = <Coc></Coc>;
    } else if (this.state.mode === "program") {
      _article = <Program></Program>;
    } else if (this.state.mode === "archieve") {
      _article = <Archieve></Archieve>;
    } else if (this.state.mode === "concept") {
      _article = <Concept></Concept>;
    } else if (this.state.mode === "partners") {
      _article = <Partners></Partners>;
    } else if (this.state.mode === "members") {
      _article = <Members></Members>;
    }

    return (
      <div className="App">
        <header>
          <Logo
            onChangeMode={function (_mode) {
              this.setState({
                mode: _mode,
              });
            }.bind(this)}
          ></Logo>

          <Menu
            onChangeMode={function (_mode) {
              this.setState({
                mode: _mode,
              });
            }.bind(this)}
            clicked={this.state.clicked}
          ></Menu>

          <MobileMenu
            onChangeMode={function (_mode) {
              this.setState({
                mode: _mode,
              });
            }.bind(this)}
            clicked={this.state.clicked}
          ></MobileMenu>
        </header>

        {_article}
      </div>
    );
  }
}

export default App;
