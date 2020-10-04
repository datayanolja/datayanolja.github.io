import React, { Component } from "react";
import "./Partners.css";
import sponsor from "../../img/Partners/sponsor.png";
import sponsor_m from "../../img/Partners/sponsor_m.png";

// 글자 : #FF9499
// 배경 : #082037

class Header extends Component {
  render() {
    return (
      <div className="par-left">
        <div className="Word-title">
          <p>
            함께하는
            <br />
            <strong>파트너스</strong>
          </p>
        </div>
      </div>
    );
  }
}

class Sponsors extends Component {
  render() {
    return (
      <div className="sponsor">
        <img id="web" src={sponsor} alt="Logo" />
        <img id="mobile" src={sponsor_m} alt="Logo" />
      </div>
    );
  }
}
class Partners extends Component {
  render() {
    return (
      <div className="par-body">
        <style>{"body { background-color: #082138; }"}</style>
        <Header></Header>
        <Sponsors></Sponsors>
      </div>
    );
  }
}

export default Partners;
