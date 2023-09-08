import React from 'react'

export default function Header(props) {
    function layerOpen(){
        props.setPop('1');
    }
  return (
    <header>
        <div className="inner">
            <h1 className="logo">
                <img src="/img/common/logo.png" alt="startto"/>
                <span>당신의 타투를 스타투해보세요</span>
            </h1>
            <div className="search-bar">
                <input type="text" placeholder="키워드로 타투 검색"/>
                <button type="button" value="검색"></button>
            </div>
            <div className="header-btn">
                <button type="button" className="upload"><span>+ Upload <strong>TATTO</strong></span></button>
                <button type="button" className="ico-btn noti" value="알림"></button>
                <button type="button" className="ico-btn my" value="마이페이지" onClick={layerOpen}></button>
            </div>
        </div>
    </header>
  )
}
