import React, { Component } from "react";
import concept from "../../img/Concept/Concept.png";
import states from "./states.json";
import "./Concept.css";

class Concept extends Component {
  render() {
    return (
      <div className="con-body">
        <div className="con-left">
          <div className="Word-title">
            <p>
              재미를
              <br />
              <strong>찾아서</strong>
            </p>
          </div>

          <img src={concept} alt="concept" />
        </div>

        <JsonConcept></JsonConcept>
        <div className="con-mobile">
          <img src={concept} alt="concept" />
        </div>
      </div>
    );
  }
}

class JsonConcept extends Component {
  // json 파일 가져와서 대입
  titleState = states.title;
  subtitle1State = states.subtitle1;
  subtitle2State = states.subtitle2;
  msg1State = states.msg1;
  // subtitle2State = states.subtitle2;
  msg2State = states.msg2;

  // 동적으로 json 데이터 가져오기
  render() {
    return (
      <div className="con-right">
        {/* <style>{'body { background: url("/static/media/background.86d71c5e.png"); background-repeat: no-repeat; background-size: cover; }'}</style> */}
        <style>{"body { background-color: #281D61; }"}</style>
        <section className="title">
          <h2>
            {this.titleState.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h2>
        </section>
        <section className="contents1">
          <h5 id="webStates">
            {this.subtitle1State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
          <h5 id="mobileStates">
            {this.subtitle2State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
          <h5>
            {this.msg1State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
        </section>
        <section className="contents2">
          {/* <h3>
            {this.subtitle2State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h3> */}
          <h5>
            {this.msg2State.split("\n").map(function (item, idx) {
              return (
                <span key={idx}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h5>
        </section>
      </div>
    );
  }
}

export default Concept;
