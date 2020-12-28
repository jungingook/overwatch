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




class MatchupList extends Component {
    
    state = {

    }
    render() { 

        const LAYOUT = {
            width: "700px",
            height: "80px",
            display: "flex",
            margin:"50px 0px ",
            top: "20px",
            left: "860px",
            fontSize:"15px",
            backgroundColor: "#444",
            color : "#fff",
            animation: 'MatchList 2s',
        
        }

        const TEAM = {
            width: "275px",
            textAlign : 'center',
            lineHeight : "80px",
            height: "80px",
            fontSize : "30px",
            backgroundColor : 'red',
            fontFamily: "'Black Han Sans', sans-serif",
        }

        const VS = {
            width: "150px",
            textAlign: "center",
            lineHeight : "30px",
            padding : '10px 0px',
            height: "80px",
            fontFamily: "'Righteous', 'Noto Sans KR',sans-serif",
        }
        const Font = {
            fontFamily: "'Noto Sans KR',sans-serif",     
        }

        // console.log(this.state.code)
        return (
        <div id="MATCH" style={LAYOUT}>
        <div style={TEAM}> {this.props.team1}</div>
        <div style={VS}>  MATCH {this.props.match} /<span style={Font}>{this.props.time} </span> <br/><div style={{fontSize:'40px'}}>VS</div> </div>
        <div style={TEAM}> {this.props.team2}</div>

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

export default connect(mapStateToProps,mapDispatchToProps)(MatchupList);
