import React, {Component} from 'react';
import './Members.css';
import example from '../../img/Members/이일섭.png'
import memberData from './Members.json';

class Members extends Component {
    render() {
        return (
            <div className="mem-body">
                <style>{"body { background-color: #082138; }"}</style>

                <div className="mem-left">
                    <div className="Word-title">
                        <p>
                            2020<br />
                            <strong>
                                막강 준비위<br />
                            </strong>
                        </p>
                    </div>
                </div>

                <PrintMember></PrintMember>
            </div>
        );
    }
}

class PrintMember extends Component {
    memberRole = memberData.role;
    memberImg = memberData.img;

    render() {
        return (
            <div className="mem-right">
                <div className="profile-container">
                    <div className="profile-content">
                        <img className="profile-image" src={example} alt="profile" />
                        <p className="profile-name">
                            {this.memberRole.split("\n").map(function (item, idx) {
                                return (
                                <span key={idx}>
                                    {item}
                                    <br />
                                </span>
                                );
                            })}

                            <b>이일섭</b>
                        </p>
                    </div>

                    <div className="profile-content">
                        <img className="profile-image" src={example} alt="profile" />
                        <p className="profile-name">
                            {this.memberRole.split("\n").map(function (item, idx) {
                                return (
                                <span key={idx}>
                                    {item}
                                    <br />
                                </span>
                                );
                            })}

                            <b>이일섭</b>
                        </p>
                    </div>

                    <div className="profile-content">
                        <img className="profile-image" src={example} alt="profile" />
                        <p className="profile-name">
                            {this.memberRole.split("\n").map(function (item, idx) {
                                return (
                                <span key={idx}>
                                    {item}
                                    <br />
                                </span>
                                );
                            })}

                            <b>이일섭</b>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Members;