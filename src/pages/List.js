
import React,{useState, useRef} from 'react';
import '../assets/css/list.css'
import listData from '../db/list'
import ModalView from './ModalView';


export default function List() {
    const [idx, setIdx] = useState(0);  //메뉴
    const [like, unlike] = useState(false); // 좋아요
    const listView = useRef(); // 테스트
    var followerList;

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
    
    //팔로잉게시글
    const follower = listData.followerList.map((item) => {
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

    //팔로잉 게시글 없을때
    const followerNone = <li className="none-list">아직 팔로잉 한 사람이 없어요</li>;
    if(listData.followerList.length === 0){
        followerList = followerNone;
    }else{
        followerList = follower;
    }

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
                        {menuArr[idx].con === 'recommendList' ? recommendList : followerList}
                    </ul>
                </div>
            </div>
            {/*<ModalView/>*/}
        </section>
    );

    
}