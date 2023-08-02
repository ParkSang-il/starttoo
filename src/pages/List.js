
import React,{useState, useRef} from 'react';
import '../assets/css/list.css'
import recommendData from '../db/recommendList'
import followerData from '../db/followerList'
import ListData from './../component/ListData'



export default function List() {
    const [idx, setIdx] = useState(0);  //메뉴
    const [sortIdx, setSortIdx] = useState(0);
    const menuArr =[
        {name:'추천', con:'recommendList',key:1},
        {name:'팔로잉', con:'followerList',key:2},
    ]
    const selectMenuHandler = (index) => {
        setIdx(index);
    };
    const sortArr = [
        {key:0,name:'최신순'},
        {key:1,name:'인기순'},
    ]

    const sortHandler = (index)=>{
        setSortIdx(index);
    }

    return (
        <section className='content'>
            <div className='inner main-list'>
                <div className='list-menu'>
                    <div className='list-btn round-btn'>
                        {menuArr.map((ele, index)=>{
                            return(
                                <button type="button" 
                                key={ele.key} 
                                className={idx === index ? 'on' :''}
                                onClick={()=> selectMenuHandler(index)}
                                >
                                    {ele.name}
                                </button>
                            )
                        })}
                    </div>
                    <div className='list-btn'>
                        {sortArr.map((ele, index)=>{
                            return(
                                <button type="button"
                                key={ele.key}
                                className={sortIdx === index ? 'on':''}
                                onClick={()=> sortHandler(index)}
                                >
                                {ele.name}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <ListData list ={menuArr[idx].con === 'recommendList' ? recommendData.recommendList : followerData.followerList}
                          name ={menuArr[idx].name}
                          sort ={sortIdx}
                />
            </div>
            {/*<ModalView/>*/}
        </section>
    );

    
}