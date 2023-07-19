import React from 'react'
export default function Footer() {
  return (
    <footer>
        <div className="inner">
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
    </footer>
  )
}
