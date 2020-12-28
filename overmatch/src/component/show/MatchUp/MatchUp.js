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
import MatchupList from './MatchUpList'; 

class MatchUp extends Component {
    
    state = {

    }

    
    render() { 

        const LAYOUT = {
            width: "100vw",
            height: "100vh",
            position: "absolute",
            backgroundImage: "url(../../../img/bg.png);",
            display:"flex",
            color : "#000",
        }
        const TODAYMATCH = {
            display:"flex",
            justifyContent: "center",
            flexDirection: "column",
            textAlign : 'center',
            width: "50%",
            height: "100vh",
            margin : "auto",
            fontSize : '150px',
            fontFamily: "'Righteous', sans-serif",
            textShadow: "10px 10px 0px orange",
            animation: 'MatchTitle 1s',
        }
        const MATCHUP = {
            display:"flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "50%",
            height: "100vh",
            padding: "100px",
            boxSizing: "border-box",
        }
    

        // console.log(this.state.code)
        return (
            <Fragment>
            <div id= "background" >
                {/* <div id= "backgroundBox" /> */}
            </div>
            <div style={LAYOUT}>
                <div style={TODAYMATCH} >
                    <div>
                    TODAY'S <br/>MATCHUP
                    </div>
                </div>
                <div style={MATCHUP}>
                    <MatchupList team1 ="Retribution" team2="T-NOG" match="1" time="오후 7시"/>
                    <MatchupList team1 ="KOR" team2="존잘오징어" match="2" time="오후 8시반"/>
                </div>
             </div>

             </Fragment>
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

export default connect(mapStateToProps,mapDispatchToProps)(MatchUp);
