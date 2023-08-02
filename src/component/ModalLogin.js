import React from 'react';

function ModalView(props) {

    function layerClose(){
        props.notLogin(false);
    }

    return (
        <div className={'view-layer-wrap login ' + (props.login ? 'on':'')}>
            <div className='bg' onClick={layerClose}></div>
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
    );
}

export default ModalView;