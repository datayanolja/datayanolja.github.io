import React, { Component } from "react";
import "./Archieve.css";
import logoImg from "../../img/Archieve/Archieve_img.png";
// import merry from "../../img/Archieve/Archieve_img.png"

class Archieve extends Component {
    render() {
        return (
            <div className="arc-body">
                <style>{"body { background-color: #6C267E; }"}</style>

                <div className="arc-top">
                    <div className="Word-title">
                        <p>
                            데놀의<br />
                            <strong>
                                보물창고
                            </strong>
                        </p>
                    </div>

                    <button>2016</button>
                    <button>2017</button>
                    <button>2018</button>
                    <button id="selected">2019</button>
                </div>

                <div className="arc-left">
                    <img className="leftImg" src={logoImg} alt="회전목마" />
                </div>

                <div className="arc-right">
                    <table>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>

                        <tr>
                            <td>
                                데이터 분석팀과 이스포츠 선수단의 신뢰쌓기
                                프로세스
                            </td>
                            <td>윤정환님</td>
                            <td>PDF</td>
                            <td>LINK</td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    }
}
export default Archieve;
