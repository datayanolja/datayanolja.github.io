import React, { Component } from "react";
import "./Program.css";
import timeTable from "../../img/Program/time_table.png";

// 글자 : #FF9499
// 배경 : #082037

class Header extends Component {
  render() {
    return (
      <div className="par-left">
        <div className="Word-title">
          <p>
            데놀의 꽃
            <br />
            <strong>프로그램</strong>
          </p>
        </div>
      </div>
    );
  }
}

class Timetable extends Component {
  render() {
    return (
      <div className="timeTable">
        <img src={timeTable} alt="Time Table" />
      </div>
    );
  }
}
class Partners extends Component {
  render() {
    return (
      <div className="par-body">
        <style>{"body { background-color: #281C61; }"}</style>
        <Header></Header>
        <Timetable></Timetable>
      </div>
    );
  }
}

export default Partners;
