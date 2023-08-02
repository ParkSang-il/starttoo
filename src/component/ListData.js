import React,{useState} from 'react';
import '../assets/css/list.css'

export default function ListData(props) {
    var data =props.list; // 데이터 리스트
    const dataLength = data.length; //리스트 갯수
    const dataName = props.name; // 데이터이름
    const dataSort = props.sort; // 최신순 인기순

    //좋아요
    const dataLike = data.map(item => item.like); // 좋아요만 가져오기
    const arrLike = new Array(dataLike); 
    const [like,setLike] = useState(arrLike[0]); //좋아요


    
    //최신순 인기순
    dataSort === 1 ? data.sort((a,b)=>{return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;}) : data.sort((a,b)=>{return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;})
    //리스트 반복
    const dataList = data.map((item, idx) => {
        return (
          <li key={item.id}>
            <div className='tit-box'>
                <strong>{item.name}</strong>
                <div className='tit-btn'>
                    <button type='button'>팔로우</button>
                    <button type='button' className='tit-menu'></button>
                </div>
            </div>
            <div className='img-box'><img src={item.img} alt="" /></div>
            <div className='btn-box-wrap'>
                <div className='btn-box txt-btn'>
                    <button className='like' onClick={()=>{
                        let likeCnt = [...like];
                        likeCnt[idx]++;
                        setLike(likeCnt);
                    }}>{like[idx]} 개</button>
                    <button className='review'>{item.review} 개</button>
                </div>
                <div className='btn-box'>
                    <button type='button' className='share'><span className='hidden'>스크랩</span></button>
                    <button type='button' className='favorite'><span className='hidden'>즐겨찾기</span></button>
                </div>
            </div>
            <div className='txt-box'>
                <p>{item.txt}</p>
                <button type='button'>더보기</button>
            </div>
          </li>
        );
    });
    //리스트 없을때
    const dataNone = <li className="none-list">아직 {dataName} 한 사람이 없어요</li>;
    
    return (
        <div className='img-list'>
            <ul>
                {dataLength === 0 ? dataNone : dataList}
            </ul>
        </div>
    );

    
}