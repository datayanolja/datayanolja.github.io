import React, {Component} from 'react';
import speaker from '../../img/Presenter/13_홍원준.png';
import '../Presenter/Presenter.css';

class Presenter extends Component {
    render() {
        return (
            <div class="pres-background">
                <style>{'body { background-color: #281D61; }'}</style>
                <div class="pres-left">
                    <p>라인웍스<br /><b>홍원준님</b></p>
                    <hr align="left"></hr>
                    <span>
                    hong.wonjun@gmail.com <br />
                        <a href="/">Github</a>
                    </span>
                    <br />
                    <img src={speaker} alt="발표자 사진"/>
                </div>
                
                <div class="pres-right">
                    <h1>
                        출근길에서 생각난 데이터 토이 프로젝트<br />
                        데이터로 "내" 문제를 풀어보는 재미
                    </h1>
                    
                    <p>
                        데이터를 업으로 하고 있으면서 정작 내 문제는 풀지 못하고 있었다 생각되어<br></br>
                        아침 출근길의 문제를 한번 풀어보려고 합니다.<br></br>
                        그 대상은 제시간을 맞추지 않기로 유명한 경의중앙선.<br></br>
                        왜 늦었던건지 한번 데이터로 재미있게 풀어봅니다.<br></br>
                        <br></br>
                        <br></br>
                        발표시간 25min<br></br>
                        난이도 ㅇㅇㅇㅇㅇ
                    </p>
                </div>

                <div class="pres-background-line">
                </div>
            </div>
        );
    }
}

export default Presenter;