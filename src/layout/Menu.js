import React from 'react'

export default function Menu() {
  return (
    <section className="menu-tatto">
        <ul>
            <li className="arrow bot">
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>테마별</span>
                    </span>
                    <span className='tit'>테마별</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>핸드포크</span>
                    </span>
                    <span className='tit'>핸드포크</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>레터링</span>
                    </span>
                    <span className='tit'>레터링</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>이레즈미</span>
                    </span>
                    <span className='tit'>이레즈미</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>라인워크</span>
                    </span>
                    <span className='tit'>라인워크</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>수채화</span>
                    </span>
                    <span className='tit'>수채화</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>올드스쿨</span>
                    </span>
                    <span className='tit'>올드스쿨</span>
                </a>
            </li>
            <li>
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>뉴스쿨</span>
                    </span>
                    <span className='tit'>뉴스쿨</span>
                </a>
            </li>
            <li className="arrow bot">
                <a href="#;">
                    <span className='bg-img'>
                        <span className='front'></span>
                        <span className='back'>전체보기</span>
                    </span>
                    <span className='tit'>전체보기</span>
                </a>
            </li>
        </ul>
    </section>
  )
}
