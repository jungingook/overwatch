// 모듈 연결
import React, { Component , Fragment } from 'react';
import { connect } from "react-redux"; // 리덕스 연결
// [리듀스]스토어 연결
import store from "../../store";

// CSS 연결
import '../../css/show.css';
import '../../css/test.css';
// import { Link } from 'react-router-dom';

// 컴포넌트 연결
import InGame from './InGame/InGame'; 
import MatchUp from './MatchUp/MatchUp';

class Show extends Component {
    
    state = {

    }

    render() { 
        // console.log(this.state.code)
        return (
            <div id = "Show" >
                <main>
                    <InGame/>
                    {/* <MatchUp/> */}
                </main>
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

export default connect(mapStateToProps,mapDispatchToProps)(Show);
