
import React,{useState, useRef} from 'react';
import '../assets/css/list.css'
import listData from '../db/list'
import ModalView from './ModalView';


export default function List() {
    const [idx, setIdx] = useState(0);
    const [like, unlike] = useState(false);
    const listView = useRef();

    const menuArr =[
        {name:'추천', con:'recommendList',key:1},
        {name:'팔로잉', con:'followerList',key:2},
    ]
    const selectMenuHandler = (index) => {
        setIdx(index);
    };

    const likeClick = () =>{
        unlike(!like);
    }
    const listName = menuArr[idx].con;


    //추천게시글
    const recommendList = listData.recommendList.map((item) => {
        return (
          <li key={item.id} ref={listView}>
            <div className='img-box'><img src={item.img} alt="" /></div>
            <div className='txt-box'>
                <strong>{item.tit}</strong>
                <div>
                    <span>{item.name}</span>
                    <button type='button' className={like ? 'on':''}
                       onClick={likeClick}
                    >{like ? item.like + 1 : item.like}</button>
                </div>
            </div>
          </li>
        );
    });
    //팔로워게시글
    const followerList = listData.followerList.map((item) => {
        return (
          <li key={item.id}>
            <div className='img-box'><img src={item.img} alt="" /></div>
            <div className='txt-box'>
                <strong>{item.tit}</strong>
                <div>
                    <span>{item.name}</span>
                    <button type='button'>{item.like}</button>
                </div>
            </div>
          </li>
        );
    });

  
    return (
        <section className='content'>
            <div className='inner'>
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
                        <button type='button'>최신순</button>
                        <button type='button'>인기순</button>
                    </div>
                </div>
                <div className='img-list'>
                    <ul>
                       {menuArr[idx].con === 'recommendList' ? recommendList :followerList}
                    </ul>
                </div>
            </div>
            {/*<ModalView/>*/}
        </section>
    );

    
}