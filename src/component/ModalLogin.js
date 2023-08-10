import React,{useEffect} from 'react';

function ModalLogin(props) {

    function layerClose(){
        props.notLogin(false);
    }
    //모달창 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = 'unset';
        };
      }, []);

    return (
        <div className={'view-layer-wrap login ' + (props.login ? 'on':'')}>
            <div className='bg' onClick={layerClose}></div>
            <div className='in'>
                <div className='tit'>
                    <h1>로그인 또는 회원가입</h1>
                    <button className='close-btn' onClick={layerClose}>닫기</button>
                </div>
                <div className='con'>
                    <h2 className='logo'>
                        <img src="/img/common/logo.png" alt="startto"/>
                        <span>당신의 타투를 스타투해보세요</span>
                    </h2>
                    <div className='login-list'>
                        <ul>
                            <li><a href="https://www.naver.com" target='blank_' className='gogle'>구글로 계속하기</a></li>
                            <li><a href="https://www.kakao.com" target='blank_' className='kakao'>카카오로 계속하기</a></li>
                            <li><a href="https://www.facebook.com" target='blank_' className='facebook'>페이스북으로 계속하기</a></li>
                            <li><a href="https://www.naver.com" target='blank_' className='naver'>네이버로 계속하기</a></li>
                        </ul>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default ModalLogin;