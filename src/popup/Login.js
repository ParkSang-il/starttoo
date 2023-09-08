import React from 'react'

export default function Login(props) {
    console.log(props.pop);
    console.log(props.setpop);
  return (
    <div className='con'>
        <h2 className='logo'>
            <img src="/img/common/logo.png" alt="startto"/>
            <span>당신의 타투를 스타투해보세요</span>
        </h2>
        <div className='login-list'>
            <ul>
                <li><a href="#;" className='gogle' onClick={()=>{
                        props.pop('2');
                    }}>구글로 계속하기</a></li>
                <li><a href="https://www.kakao.com" target='blank_' className='kakao'>카카오로 계속하기</a></li>
                <li><a href="https://www.facebook.com" target='blank_' className='facebook'>페이스북으로 계속하기</a></li>
                <li><a href="https://www.naver.com" target='blank_' className='naver'>네이버로 계속하기</a></li>
            </ul>
        </div>
    </div>
  )
}
