
import React, {useState,  useEffect} from 'react';
import '../assets/css/list.css'
import followerData from '../db/followerList'
import ListData from './../component/ListData'
import axios from 'axios'

export default function List(props) {
    const [idx, setIdx] = useState(0);  //메뉴
    const [sortIdx, setSortIdx] = useState(0);
    const [feedList, setFeedList] = useState([])
    const [feedOrder, setFeedOrder] = useState('1');
    const [listType, setListType] = useState('recommendList');
    const menuArr =[
        {name:'추천', con:'recommendList',key:1},
        {name:'팔로잉', con:'followerList',key:2},
    ]
    useEffect(() => {
        async function feedListData() {
            const { data } = await axios.get('/feed/feedlist',
                {params : {
                        type: listType,
                        order: feedOrder
                    }
                });
            console.log(data);
            setFeedList(data.recommendList);
        }
        feedListData();
    }, []);

    const selectMenuHandler = (index, con) => {
        setListType(con);
        async function feedListData() {
            const { data } = await axios.get('/feed/feedlist',
                {params : {
                        type: listType,
                        order: feedOrder
                    }
                });
            console.log(data);
            setFeedList(data.recommendList);
        }
        feedListData();
        setIdx(index);
    };
    const sortArr = [
        {key:0,name:'최신순', orderType:'1'},
        {key:1,name:'인기순', orderType:'2'}
    ]

    const sortHandler = (index, orderType)=>{
        setFeedOrder(orderType);
        async function feedListData() {
            const { data } = await axios.get('/feed/feedlist',
                {params : {
                        type: listType,
                        order: feedOrder
                    }
                });
            console.log(data);
            setFeedList(data.recommendList);
        }
        feedListData();
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
                                onClick={()=> selectMenuHandler(index, ele.con)}
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
                                onClick={
                                    ()=> sortHandler(index, ele.orderType)
                                }
                                >
                                {ele.name}
                                </button>
                            )
                        })}
                    </div>
                </div>
                <ListData list ={feedList}
                          name ={menuArr[idx].name}
                          sort ={sortIdx}
                          pop ={props.setPop}                
                />
            </div>
            {/*<ModalView/>*/}
        </section>
    );

    
}