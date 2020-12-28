// 모듈 연결
import React, { Component , Fragment } from 'react';
import { connect } from "react-redux"; // 리덕스 연결
// [리듀스]스토어 연결
import store from "../../store";

// CSS 연결
// import '../../Css/FrontPage.css';
import { Link } from 'react-router-dom';

// 컴포넌트 연결
//import HeaderMenu from './HeaderMenu'; // 메뉴 헤더

class Control extends Component {
    
    state = {

    }

    render() { 
        console.log(this.state.code)
        return (
            <div id = "FrountPage" >
                {/* <HeaderMenu page="Frount"/>
                <main>
                    <div id="SiteLoge">
                    어몽.gg
                    </div>
                    <div id="MemoStart" >
                        <a id="MemoStart" href="/memo" target ="_blank">
                        <img width='10%' src={ require('../Images/Start.png') } />
                        </a>
                    </div>
                    <div id="emailZone">
                        <a href="https://open.kakao.com/o/s7ej85Hc" id="email"> 문의&amp;피드백 : https://open.kakao.com/o/s7ej85Hc</a>
                    </div>

                </main> */}
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

export default connect(mapStateToProps,mapDispatchToProps)(Control);
