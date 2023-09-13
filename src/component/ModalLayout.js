import React,{useEffect} from 'react';
import Block from '../popup/Block';
import BlockNoti from '../popup/BlockNoti';
import Login from './../popup/Login';
import Profile from './../popup/Profile';


function ModalLayout(props) {

    function layerClose(){
        props.setPop('0');
    }
    console.log(props.pop);

    //모달창 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
       
        return () => {
         document.body.style.overflow = 'unset';
        };
      }, []);
     
    const popTitle = (props.pop === '1') ? "로그인 또는 회원가입" : (props.pop === '2') ? "프로필 설정" : (props.pop === '3') ? "신고하기" : "차단하기";
    const popClass = (props.pop === '1') ? "login" : (props.pop === '2') ? 'profile' : 'block';
      

    return (
        <div className={'view-layer-wrap ' + (props.pop !== '0' ? 'on':'')}>
            <div className='bg' onClick={layerClose}></div>
            <div className={'in ' + popClass}>
                <div className='tit'>
                    <h1>{popTitle}</h1>
                    <button className='close-btn' onClick={layerClose}>닫기</button>
                </div>
               {(props.pop === '1') ? <Login pop = {props.setPop} setpop = {props.pop}/> : (props.pop === '2') ? <Profile/> : (props.pop === '3') ? <BlockNoti/> : <Block/>}
            </div>
        </div>
    );
}

export default ModalLayout;