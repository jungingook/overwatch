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




class MathcNotice extends Component {
    
    state = {

    }
    render() { 

        const LAYOUT = {
            width: "200px",
            height: "38px",
            position: "absolute",
            fontFamily: "'Righteous', sans-serif",
            top: "10px",
            left: "860px",
            fontSize:"15px",
            backgroundColor: "#444",
            color : "#fff",
            animation: 'moveMid 5s',
            borderBottom: '2px solid orange'
        }

        const MATCH = {

            height: "19px",
            padding: "0px 20px",
            textAlign: "center",

        }

        const SCORE = {
            height: "19px",
            textAlign: "center",
        }

        // console.log(this.state.code)
        return (
        <div id="MATCHNOTICE" style={LAYOUT}>
            
            <div style={MATCH}> 
            MATCH 1
            </div>
            <div style={SCORE} >
            GAME 1
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(MathcNotice);
