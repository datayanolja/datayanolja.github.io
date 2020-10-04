import React, { Component } from "react";
import logo from "../../img/Header/logo.png";
import "../Header/Logo.css";

class Logo extends Component {
  render() {
    return (
      <a
        href="/"
        onClick={function (e) {
          e.preventDefault();
          this.props.onChangeMode("main");
        }.bind(this)}
      >
        <img className="Title" src={logo} alt="데이터야놀자 로고" />
      </a>
    );
  }
}

export default Logo;