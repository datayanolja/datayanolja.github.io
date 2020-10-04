import React, {Component} from 'react';

class Enjoy extends Component {
    constructor(props) {
        super(props);
        this.state = {
          mode: "speaker",
          clicked: "clicked",
        };
    }

    render() {
        return (
            <div className="spe-body">
                <style>{'body { background-color: #082138; }'}</style>

                <div className="spe-top">
                    <div className="Word-title">
                        <p>
                            <strong>
                                데놀<br />
                            </strong>
                            즐기기
                        </p>
                    </div>
                    
                    <button>청중</button>
                    <button id="selected">발표자</button>
                </div>
            </div>
}
export default Speaker;