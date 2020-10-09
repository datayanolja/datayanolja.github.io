import React, { Component } from "react";
import "./Main.css";
import mainLogo from "../../img/Main/title_04.png";
import mainDate from "../../img/Main/date.png";
import mainDate_m from "../../img/Main/mainDate_m.png";
import logoImg from "../../img/Main/back_04.png";
import logoImg_m from "../../img/Main/back_m.png";
import states from "./aboutus_w.json";
import states_m from "./aboutus_m.json";

class Mainlogo extends Component {
  render() {
    return (
      <div className="main-left">
        <img className="mainLogo" src={mainLogo} alt="웰컴투 데놀랜드" />
        <img className="mainDate" src={mainDate} alt="2020년 10월 17일" />
        <img
          className="mainDate_m"
          src={mainDate_m}
          alt="모바일2020년 10월 17일"
        />
        <br />
        <img className="logoImg" src={logoImg} alt="웹" />
        <img className="logoImg_m" src={logoImg_m} alt="모바일" />
      </div>
    );
  }
}

class Aboutus extends Component {
  titleState = states.title;
  msgState = states.msg;
  msgState_m = states_m.msg;

  render() {
    return (
      <main>
        <section className="main-right">
          <section className="title">
            <h5>SINCE 2016</h5>
            <h1>
              {this.titleState.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </h1>
          </section>

          <section className="dots">
            ........................................
          </section>

          <section className="aboutUs">
            <h5 id="webStates">
              {this.msgState.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </h5>
            <h5 id="mobileStates">
              {this.msgState_m.split("\n").map(function (item, idx) {
                return (
                  <span key={idx}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </h5>
          </section>

          <section className="contact">
            <h5>
              <a href="mailto:datayanolja.master@gmail.com">
                CONTACT | datayanolja.master@gmail.com{" "}
              </a>
            </h5>
          </section>
        </section>
      </main>
    );
  }
}

class Main extends Component {
  render() {
    return (
      <div className="main-body">
        <style>{"body { background-color: #6BEEFF; }"}</style>
        <Mainlogo title="데이터야놀자 2020"></Mainlogo>
        <Aboutus></Aboutus>
      </div>
    );
  }
}

export default Main;
