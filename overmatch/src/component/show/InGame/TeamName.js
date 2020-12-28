
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




class TeamName extends Component {
    
    state = {

    }

    render() { 

        let layout = {
            width: "690px",
            height: "40px",
            display: "flex",
            position: "absolute",
            lineHeight: "40px",
            fontFamily: "'Black Han Sans', sans-serif",
            top: "20px",
            fontSize:"30px",
            color : "#fff",
        }

        if (this.props.position == "left"){
        
            layout = Object.assign(layout,
            {   
                left: "0px",
                flexDirection: "row",
                justifyContent: "flex-end",
                textAlign: 'right',
            }

        )
        } else if (this.props.position == "right"){
            layout = Object.assign(layout,
            {
                right: "0px",
                flexDirection: "row-reverse",
                justifyContent: "flex-end",
                textAlign: 'left',
            }
    
        )

        }
        const LAYOUT = layout
        const NAME = {
            background: this.props.color,
            height: "40px",
            padding: "0px 20px",

            width: "630px",

        }

        const SCORE = {
            width: "40px",
            height: "40px",

            textAlign: "center",
            backgroundColor: "#444",
       
        }
        

        // console.log(this.state.code)
        return (
        <div style={LAYOUT} id={"Time"+this.props.position} className="NameBar">
            
            <div style={NAME}> 
                {this.props.TimeName}
            </div>
            <div style={SCORE} >
                {this.props.score}
            </div>
            <div style={{backgroundColor: "orange",width:'5px',height: "40px"}} />
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

export default connect(mapStateToProps,mapDispatchToProps)(TeamName);
