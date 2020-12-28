// 모듈 연결
import React, { Component , Fragment } from 'react';
import { connect } from "react-redux"; // 리덕스 연결
// [리듀스]스토어 연결
import store from "../../../store";

// CSS 연결
import '../../../css/show.css';
import '../../../css/test.css';
// import { Link } from 'react-router-dom';

// 컴포넌트 연결
import TeamName from './TeamName'; 
import MatchNotice from './MatchNotice';

class InGame extends Component {
    
    state = {

    }

    render() { 
        // console.log(this.state.code)
        return (
            <div id = "InGame" >
                {/* <TeamName position="left" TimeName="전투형제" score="1" color="blue"/>
                <MatchNotice match="1" set="1"/>
                <TeamName position="right" TimeName="홍님" score="0" color="red"/> */}
                <TeamName position="left" TimeName="레트리뷰션" score="1" color="#aa8a00"/>
                <MatchNotice match="1" set="1"/>
                <TeamName position="right" TimeName="T-NOG" score="0" color="#ffd100"/>
                
                {/* <TimeName position="left" TimeName="KOR" score="0" color="#59cbe8"/> */}
                {/* <TimeName position="right" TimeName="존잘오징어" score="0" color="#fa7298"/> */}
            </div>
        );
    }
}
// export default MemoPage;

function mapDispatchToProps(dispatch){
    return {
  
    }
  }
const mapStateToProps = (state) => ({

  })

export default connect(mapStateToProps,mapDispatchToProps)(InGame);
