import React, { Component } from "react";
import speaker2 from "../../img/Speaker/guide_02.png";
import speaker3 from "../../img/Speaker/guide_03.png";
import speaker4 from "../../img/Speaker/guide_04.png";
import "../Speaker/Speaker.css";
// import "../Speaker/media-Speaker.css";

class Speaker extends Component {
  render() {
    return (
      <div className="spe-body">
        <style>{"body { background-color: #082138; }"}</style>

        <div className="spe-top">
          <div className="Word-title">
            <p>
              <strong>
                데놀
                <br />
              </strong>
              즐기기
            </p>
          </div>
        </div>

        <div className="spe-contents">
          <div className="left-content">
            <img src={speaker2} alt="발표자 사진" />
            <div id="spe-text">
              <h2>
                데이터야놀자에서
                <br />
                오직 당신만이 들려줄 수 있는 <br />
                소중한 이야기
              </h2>
              <p>
                데이터와 함께 하며 겪었던 모든 고난, 시련, 역경, 삽질, 기쁨,
              </p>
              <p>환희나 데이터를 통해 얻은 통찰, 데이터를 통한</p>
              <p>
                새로운 가치 창출의 경험 등 당신만의 소중한 경험을 공유해주세요
              </p>

              <h2>
                데이터에 관심 있는 <br />
                다양한 직군의 사람들이 모이는
                <br />
                데이터야놀자
              </h2>
              <p>
                연구원, 고등학생 등 다양한 사람들이 모여서 만드는 행사입니다.
              </p>
              <p>발표 소개에서 대상 청중을 구체적으로 작성해주시면,</p>
              <p>모두가 원하는 발표를 들을 수 있어요</p>
            </div>
          </div>

          <div className="right-content">
            <img id="mobileImg" src={speaker3} alt="발표자 사진" />
            <div id="spe-text">
              <h2>특정 기술에 대한 이야기도 환영</h2>
              <p>
                데이터를 다루는 특정 기술에 대한 전문적인 이야기도 환영합니다.
              </p>
              <p>단, 발표 전 이러한 점을 청중에게 미리 알려주시면,</p>
              <p>미리 마음의 준비를 할 수 있어요!</p>

              <h2>Put your hands up!</h2>
              <p>저희는 데이터로 재밌게 놀기 위해 모였습니다.</p>
              <p>엄숙하거나 프로패셔널한 모습도 좋지만,</p>
              <p>편한 마음으로 재밌는 이야기를 마음껏 즐겨주세요.</p>
            </div>
            <img id="webImg" src={speaker3} alt="발표자 사진" />
          </div>

          <div className="left-content">
            <img src={speaker4} alt="발표자 사진" />
            <div className="last" id="spe-text">
              <h2>최고의 발표는 최고의 광고!</h2>
              <p>광고는 멋진 발표 후 마지막 슬라이드 한 장이면 충분합니다.</p>
              <p>광고는 최대한 자제해주세요.</p>
              <p>광고는 제품이 아닌</p>
              <p>사람에게 반할 때 효과가 가장 큽니다.</p>

              <h2>피드백 무한 환영</h2>
              <p>발표에 대해 궁금한 점이나 행사에 대한 피드백은</p>
              <p>365일 연중무휴!</p>
              <p>언제든 데놀 공식 이메일이나 페이스북을 통해 연락주세요.</p>
              <p>신속정확하게 답변 배달해드립니다.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Speaker;
