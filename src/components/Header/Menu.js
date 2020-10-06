import React, { Component } from "react";
import $ from "jquery";
import "../Header/Menu.css";
import "../Header/mediaMenu.css";

class Menu extends Component {
  componentDidMount() {
    $(".menu")
      .each(function (index) {
        console.log("each 구문 실행");
        $(this).attr("menu-index", index);
      })
      .click(function () {
        var index = $(this).attr("menu-index");
        $(".menu[menu-index=" + index + "]").addClass("clicked");
        $(".menu[menu-index!=" + index + "]").removeClass("clicked");
      });
  }

  render() {
    return (
      <ul id="main-menu">
        <li>
          <a
            href="/main"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("main");
            }.bind(this)}
          >
            데놀랜드 소개
          </a>
          <ul id="sub-menu" className="about-sub">
            <li>
              <a
                href="/"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("speaker");
                }.bind(this)}
              >
                데놀 즐기기
              </a>
            </li>

            <li>
              <a
                href="/"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("partners");
                }.bind(this)}
              >
                함께하는 파트너스
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("concept");
            }.bind(this)}
          >
            데놀랜드 2020
          </a>
          <ul id="sub-menu" className="event-sub">
            <li>
              <a
                href="/program"
                onClick={function (e) {
                  e.preventDefault();
                  this.props.onChangeMode("program");
                }.bind(this)}
              >
                프로그램
              </a>
            </li>
          </ul>
        </li>

        <li>
          <a
            href="/coc"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("coc");
            }.bind(this)}
          >
            데놀랜드 이용규칙
          </a>
        </li>

        <li>
          <a
            href="/main"
            className="menu"
            onClick={function (e) {
              e.preventDefault();
              this.props.onChangeMode("main");
            }.bind(this)}
          >
            데놀랜드 뉴스레터
          </a>
          <ul id="sub-menu" className="news-sub">
            <li>
              <a href="https://stib.ee/MWQ2" target="_blank" rel="noopener noreferrer">뉴스레터 1회차</a>
            </li>

            <li>
              <a href="https://stib.ee/ILT2" target="_blank" rel="noopener noreferrer">뉴스레터 2회차</a>
            </li>

            <li>
              <a href="https://stib.ee/BOU2" target="_blank" rel="noopener noreferrer">뉴스레터 3회차</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="https://event-us.kr/datayanolja2020/event/23268" target="_blank" rel="noopener noreferrer" className="menu">
            데놀랜드 입장권
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
