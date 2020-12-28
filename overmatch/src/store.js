// 스토어생성기, 미들웨어적용 모듈 임포트
import { createStore, applyMiddleware } from 'redux';

// 여기서 부터 미들웨어/데브툴 관련 임포트
// import { composeWithDevTools } from 'redux-devtools-extension';
// import logger from 'redux-logger';
// import thunk from 'redux-thunk';


const defaultState = {
    crewColor : ['Black','Blue','Brown','Cyan','Green','Lime','Orange','Pink','Purple','Red','White','Yellow'],
    language :'Korean',
    screenMode :'sideBar',
    sideBar : 'crewMemo',
    map :'TheSkeld',
    stampSet : 'Red',
    stampState : null,
    temp : null,
    jwtToken : 'ㅁㅁㅁ',
    thisweek : false,
    classRecord : null,
    cardColor : {
        default : ["#00B0F0","#009FF0"], // 블루와 같음
        red : ["#E93A2E","#C92A1D"], // 확정
        blue : ["#00B0F0","#009FF0"], // 확정
        green : ["#99C556","#7EBB57"], // 확정
        yellow : ["#FFC000","#FFB000"], //확정
        pink : ["#E780BC","#E770AC"], // 확정 
        purple : ["#9949CE","#5C3088"], // 확정
        black : ["#595959","#474747"] // 확정
    },
    classList: [
    {
        id: 0,
        name: '[테스트모드] 앱프로그래밍',
        professor: '정인국',
        code: '000000',
        day: 0,
        startTime: 600,
        endTime: 180,
        color :'green',
        design : "default"
    },
    ],
    
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        // 카드 선택시
        case "crewColorChange" :
            console.log(action.crewColor)
            let newCrewColor = action.crewColor.slice()
            return {
                ...state,
                crewColor : newCrewColor,
            }
        case "stampColorSet" :
            console.log(action.color)
            return {
                ...state,
                stampSet : action.color,
            }   
        case "stampState" :
            console.log(action.state)
            return {
                ...state,
                stampState : action.state,
            }   
        case "MapSelect":
            return {
                ...state,
                map : action.map,
            }           
        case "temp" :
            return {
                ...state,
                temp : 1,
            }

        case "ADDCLASS" :
            return {
                ...state,
                addClass: true,
            }         
        case "ADDCLASSBACK" :
            return {
                ...state,
                addClass: false,
            }         
        case "classListRefresh" :
            return {
                ...state,
                classListRefresh: action.refresh,
            }     
        case "attendanceRefresh" :
            return {
                ...state,
                attendanceRefresh: action.refresh,
            }     
        case "selectAttendanceWeek" :
            return {
                ...state,
                attendanceNo: action.attendanceNo,
            }     
        case "WEEKSLECET" :
            return {
                ...state,
                qrCreactWeek: action.week,
            }   
        case "progressClassRecord" :
            return {
                ...state,
                jwtToken : 'ㅎㅎㅎ',
            }   
            
        // 테스트용 
        case "테스트토큰제거" :
            return {
                ...state,
                jwtToken : null,
            }    
        default:
            console.log("리듀스 성공");
            return state; 
        }
};

const store = createStore(reducer);
export default store;
