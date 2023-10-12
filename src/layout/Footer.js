import React from 'react'
export default function Footer(props) {
    console.log(props);
    function layerOpen(){
        props.setPop('1');
    }
  return (
    <footer>
        <div className="inner pc-footer">
            <p> © 2023 Startoo. All rights reserved</p>
            <ul className='txt'>
                <li>
                    <a href="#;">스타투 소개</a>
                </li>
                <li>
                    <a href="#;">피드</a>
                </li>
                <li>
                    <a href="#;">설정</a>
                </li>
            </ul>
            <ul className='ico'>
                <li>
                    <a href="#;" className='facebook'><span className='hidden'>facebook</span></a>
                </li>
                <li>
                    <a href="#;" className='twitter'><span className='hidden'>twitter</span></a>
                </li>
                <li>
                    <a href="#;" className='instargram'><span className='hidden'>instargram</span></a>
                </li>
            </ul>
        </div>
        <div className="inner mobile-footer">
            <button className='home'>home</button>
            <button className='menu'>menu</button>
            <button className='my' onClick={layerOpen} >my</button>
        </div>
    </footer>
  )
}
