import React, { Component } from "react";
import "./coc.css";
import logo from "../../img/Coc/Coc_img.png";

class Header extends Component {
  render() {
    return (
      <div className="coc-header">
        <div className="Word-title">
          <p>
            <strong>
              Code <br />
              of Conduct
            </strong>
            <br />
            <div className="coc-lower">
              데이터야 놀자는
              <br />
              다음의 가치를
              <br />
              중요하게 생각합니다.
            </div>
          </p>
        </div>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}
class SectionA extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          "데이터야놀자는 데이터를 사랑하는 모든 사람들의 축제로 오픈소스와 커뮤니티\n정신을 바탕으로 하며, 구성원들 모두의 자발적 참여로 운영되는 행사입니다.",
      },
      {
        id: "highlight",
        desc:
          "행사의 행동강령(Code of Conduct)는 행사에 참여하는 모든 커뮤니티 구성원이 행사\n내에서 준수해야 하는 행동 규칙이자 우리 모두의 약속입니다.",
      },
      {
        id: "middle",
        desc:
          "또한 CoC는 데이터야놀자가 추구하는 가치에 대한 내용으로, 데이터야 놀자를 보다\n재밌게 즐기기 위해서 아래의 내용을 꼭 읽어주세요",
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="section A">
        <div className="dot">
          <div id="circle"></div>
        </div>
        <section className="cocSection">
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">{this.write_text(2)}</div>
        </section>
      </div>
    );
  }
}

class SectionB extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          '어울림이 없는 축제를 축제라고 할 수 있을까요? 데이터야놀자의 참가자들은 각자의\n배경이 다르더라도 "데이터"라는 공통된 관심사로 모인 사람들입니다.\n데이터에 대한 관심으로 데이터야놀자에 모인 우리 모두는 동등한 데이터인입니다.\n데이터야놀자는 데이터 앞에서 모두가 평등한 축제가 되기를 희망합니다.',
      },
      {
        id: "highlight",
        desc:
          "데이터야놀자는 성별, 신체, 육체적 혹은 정신적 질병, 종교, 출신을 포함한 서로의 다름을\n비난하거나 차별하는 행위를 허용하지 않습니다.",
      },
      {
        id: "middle",
        desc:
          "데이터야놀자는 운영진, 발표자, 참가자 등 행사에 참여하는 모두가 안전하게 즐길 수\n있기를 바라며 아래 행동을 철저하게 금지합니다.\n본인의 의도와 상관없이 상대방이 불쾌하게 느끼는 모든 행동 또한 포함되며 동성 및\n이성 간 모두에게 적용됩니다.\n",
      },
      {
        id: "list",
        desc:
          "- 남을 불편하게 하는 관심표현 및 무례한 질문 투척\n- 동의하지 않은 신체접촉\n- 성적 농담을 포함한 부적절한 콘텐츠의 공유 및 게시",
      },
      {
        id: "bottom",
        desc:
          '데이터야놀자 내에서 위의 내용을 위반하는 상황이 발생한 경우, 아래의 "신고하기"\n내용을 참고하여 알려주시기 바랍니다.\n데이터야놀자는 공정하고 즉각적인 대응을 할 것을 약속드립니다.',
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="section B">
        <div className="dot">
          <div id="circle">
            <p>
              COMPANION
              <br />
              어울림
            </p>
          </div>
        </div>
        <section className="cocSection">
          <p id="mobile_p">COMPANION 어울림</p>
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">{this.write_text(2)}</div>
          <div className="coc">{this.write_text(3)}</div>
        </section>
      </div>
    );
  }
}

class SectionC extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          "데이터야놀자는 참가자들의 자발적 참여를 통해 이루어집니다. 데이터야놀자가 하나의\n오픈소스라면, 참가자들 모두가 데이터야놀자라는 프로젝트에 참여하고 있는 것이죠.",
      },
      {
        id: "highlight",
        desc:
          "데이터야놀자에 기여하는 형태는 모두가 다를 수 있지만 각각의 소중한 참여가 모여\n데이터야놀자가 만들어집니다. 데이터야놀자의 주인은 데놀에 참여하는 여러분입니다!\n",
      },
      {
        id: "pmc",
        desc:
          "각자의 본업이 있음에도 데이터야놀자를 준비하기 위해 기꺼이 자신의 시간을 쓰면서\n행사준비를 하고 있습니다. 매번 데이터야놀자에서 어떤 메시지를 전달할 지 고민하고,\n어떻게 하면 참가자들이 데이터야놀자를 더욱 잘 즐길 수 있을지 고민하고 있습니다.\n",
      },
      {
        id: "committer",
        desc:
          "다양하고 수준높은 발표를 준비하는 발표자 분들과, 원활한 행사진행을 위해\n물심양면으로 지원해주시는 후원사 분들 덕분에 더욱 알차고 푸짐한 데이터야놀자를\n만들어가고 있습니다.\n",
      },
      {
        id: "user",
        desc:
          "아무리 잘 준비된 행사라도, 아무리 즐길 거리가 많은 축제라도 즐기는 사람이 없다면\n무용지물입니다. 데이터야놀자에 소중한 시간과 참가비를 지불하고 행사를 즐기는\n참가자들이 없다면 데이터야놀자는 지속될 수 없습니다. 데이터야놀자에 항상 관심을\n가져주시고 참여해주시는 분들이야말로 데이터야놀자를 만들어가는 사람들입니다.",
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="section C">
        <div className="dot">
          <div id="circle">
            <p>
              OWNERSHIP
              <br />
              참여
            </p>
          </div>
        </div>
        <section className="cocSection">
          <p id="mobile_p">OWNERSHIP 참여</p>
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">{this.write_text(1)}</div>
          <div className="coc">
            <div className="bold">PMC(운영진/자원봉사자)</div>
            {this.write_text(2)}
          </div>
          <div className="coc">
            <div className="bold">COMMITTER(발표자/후원자)</div>
            {this.write_text(3)}
          </div>
          <div className="coc">
            <div className="bold">USER(참가자)</div>
            {this.write_text(4)}
          </div>
        </section>
      </div>
    );
  }
}

class SectionD extends Component {
  state = {
    contents: [
      {
        id: "head",
        desc:
          '데이터야놀자를 단순한 컨퍼런스가 아닌 축제라고 하는 이유는, "데이터"를 통해 "놀기"위해\n모였기 때문입니다. 데이터야놀자에 참가한 모든 분들이 행사를 통해 다음의 즐거움을\n마음껏 누리고 가셨으면 좋겠습니다.\n',
      },
      {
        id: "knowlege",
        desc:
          "연사자들이 데이터를 다루며 경험했던 내용들을 공유함으로써 새로운 지식을 쌓거나\n유용한 팁을 주고받으면서 얻는 즐거움\n",
      },
      {
        id: "networking",
        desc:
          "데이터에 관심있는 사람들이 모여 서로 이야기를 나누고, 아는 것을 공유하며, 새로운\n 인연을 만들어가며 얻는 즐거움\n",
      },
      {
        id: "play",
        desc:
          "여러 부스와 먹거리, 마실거리(맥주!), 중간중간 준비된 이벤트 등 행사에 준비된\n 컨텐츠를 통해 얻는 즐거움",
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="section D">
        <div className="dot">
          <div id="circle">
            <p>
              CHEERS!
              <br />
              즐거움
            </p>
          </div>
        </div>
        <section className="cocSection">
          <p id="mobile_p">CHEERS! 즐거움</p>
          <div className="coc">{this.write_text(0)}</div>
          <div className="coc">
            <div className="bold">지적 즐거움</div>
            {this.write_text(1)}
          </div>
          <div className="coc">
            <div className="bold">네트워킹의 즐거움</div>
            {this.write_text(2)}
          </div>
          <div className="coc">
            <div className="bold">노는 즐거움</div>
            {this.write_text(3)}
          </div>
        </section>
      </div>
    );
  }
}

class Report extends Component {
  state = {
    contents: [
      {
        id: "신고하기",
        desc:
          "데이터야놀자 행사 내에서 상대방을 존중하지 않는 행위를 목격하셨다면, 주저하지 말고\n알려주시면 감사하겠습니다. 가해자에 대한 처벌과 더불어, 앞으로 비슷한 사례가\n일어나지 않도록 데이터야놀자는 최선을 다하겠습니다.\n",
      },
      {
        id: "신고방법",
        desc:
          "위반 행위의 가해자에 따라서 신고 방법이 달라질 수 있습니다.\n\n운영진의 CoC 위반\n: 제 3자 채널을 활용\n\n발표자 및 참가자의 CoC 위반\n: 홈페이지 내 CoC 신고 링크(구글닥스)\n: 페이스북 메시지 및 데이터야놀자 공식 이메일\n: 카카오톡 오픈채팅(1:1, 익명프로필 사용 가능)\n\n피해자 보호를 위해 익명 제보가 가능한 채널을 통해 제보 가능합니다. 보다 신속하고\n확실한 대응을 위해 사실관계를 최대한 자세하게 서술해주시면 감사하겠습니다.\n구체적인 설명이 없으면 사실 파악이 어려워 적극적인 대응을 하지 못할 수 있습니다.\nCoC에 언급된 내용 중 불편했던 항목에 대해서는 가감없이 신고해주시기 바랍니다.\n추가적인 사실관계 파악을 위해 신고 이후 대화 가능한 연락처를 요청드릴 수 있습니다.\n",
      },
      {
        id: "대응방식",
        desc:
          "접수된 내용은 즉각적 대응을 원칙으로, 재발 방지를 위해\n신속하게 대응 방법을 공지할 것을 약속합니다.\n\n즉각적 대응\n접수된 CoC 위반 건은 곧바로 검토되며, 24시간 이내에\n커뮤니티 위반 건에 대한 내용을 공개하겠습니다.\n이 과정에서 신고자가 누구인지 노출되지 않도록 신중하게 내용 작성을 하겠습니다.\n\n대응방식\n: 운영진 내부 대책회의\n: 커뮤니티 참여자들의 의견 청취\n: 제 3자를 이용한 사실관계 파악 및 대응책 수립\n",
      },
      {
        id: "재발 방지를 위하여",
        desc:
          "데이터야놀자에서 일어나는 모든 일들은 오픈소스와 같이 투명하게 공개되어야 합니다.\nCOC 위반 내역이 접수된 경우, 해당 내용은 피해자가 드러나지 않도록 보호하면서\n데이터야놀자의 모든 채널(홈페이지, 페이스북)을 통해 모두 공개하도록 하겠습니다.\n\n공개할 내용\n: 가해자의 소속(운영진 / 발표자 / 참가자)\n: COC 위반 일시 및 장소\n: COC 위반 상세 내용\n: 위반 건 처리 경과\n: 재발 방지 대책",
      },
    ],
  };

  write_text(i) {
    const desc = this.state.contents[i].desc;

    return desc.split("\n").map(function (item, idx) {
      return (
        <span key={idx}>
          {item}
          <br />
        </span>
      );
    });
  }

  render() {
    return (
      <div className="section E">
        <div className="dot">
          <div id="circle">
            <p>
              REPORT
              <br />
              신고
            </p>
          </div>
        </div>
        <section className="cocSection">
          <p id="mobile_p">REPORT 신고</p>
          <div className="coc">
            <div className="bold">신고하기</div>
            {this.write_text(0)}
          </div>
          <div className="coc">
            <div className="bold">신고방법</div>
            {this.write_text(1)}
          </div>
          <div className="coc">
            <div className="bold">대응방식</div>
            {this.write_text(2)}
          </div>
          <div className="coc">---------------------------------</div>
          <div className="coc">
            <div className="bold">
              <br />
              COC 위반이 접수된 이후 - 재발 방지를 위하여
            </div>
            {this.write_text(3)}
          </div>
        </section>
      </div>
    );
  }
}

class Container extends Component {
  render() {
    return (
      <section className="container">
        <SectionA></SectionA>
        <SectionB></SectionB>
        <SectionC></SectionC>
        <SectionD></SectionD>
        <Report></Report>
      </section>
    );
  }
}

class Coc extends Component {
  render() {
    return (
      <div className="coc-body">
        <style>{"body { background-color: #fdd2db; }"}</style>
        <Header></Header>
        <Logo></Logo>
        <Container></Container>
      </div>
    );
  }
}

export default Coc;
