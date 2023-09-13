import React from 'react'

export default function Menu() {
    const menuLits = ['이레즈미','라인워크','수채화','올드스쿨','뉴스쿨'];
  return (
    <section className="menu-tatto"> 
        <div className="menu-btn">
            <button type="button" className='notice'>알림</button>
            <button type="button" className='menu'>메뉴</button>
        </div>
        <ul>
            <li className="arrow normal">
                <a href="#;"><span>부위</span></a>
            </li>
            <li className="all normal">
                <a href="#;">취향전체</a>
            </li>
            {menuLits.map((item,idx)=>(
                <li key={idx}>
                    <a href="#;">{item}</a>
                </li>    
            ))}
            <li className="select normal">
                <a href="#;"><span className="hidden">타투종류</span></a>
            </li>
        </ul>
    </section>
  )
}
