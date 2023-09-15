import React,{useState} from 'react';
import '../assets/css/list.css'

export default function ListData(props) {
    var data =props.list; // 데이터 리스트
    const dataLength = data.length; //리스트 갯수
    const dataName = props.name; // 데이터이름
    const dataSort = props.sort; // 최신순 인기순
   
    //좋아요
    /*const dataLike = data.map(item => item.like); // 좋아요만 가져오기
    const arrLike = new Array(dataLike);
    const [like,setLike] = useState(arrLike[0]); //좋아요*/
    const [like, setLike] = useState([]);

    //팔로우
    const [follower, setFollwer] = useState([]);

    //신고
    const [block, setBlock] =useState();
    const layerTxt = 
            <div className="layer-txt">
                <button className="close" onClick={()=>{
                    setBlock(false);
                }}><span className="hidden" >닫기</span></button>
                <button className="noti" onClick={()=>{
                        props.pop('3');
                    }}>신고하기</button>
                <button className="block"onClick={()=>{
                        props.pop('4');
                    }}>차단하기</button>
            </div>
    //최신순 인기순
    dataSort === 1 ? data.sort((a,b)=>{return a.like > b.like ? -1 : a.like < b.like ? 1 : 0;}) : data.sort((a,b)=>{return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;})
   
    //리스트 반복
    const dataList = data.map((item, idx) => {
        return (
          <li key={idx}>
            <div className='tit-box'>
                <strong><span className='profile'><img src="/img/ico/dark/ico_myname.png" alt="" /></span>{item.name}</strong>
                <div className='tit-btn'>
                    <button type='button' className={'follower ' + (follower.includes(item) ? 'on':'')}
                    onClick={()=>{
                        !follower.includes(item) ? setFollwer((follower) => [...follower, item]) : setFollwer(follower.filter((button) => button !== item));
                    }}
                    >팔로우</button>
                    <button type='button' className='tit-menu'
                    onClick={()=>{
                        setBlock(idx);
                        console.log(block);
                        console.log(idx);
                    }}>
                    </button>
                </div>
                {block === idx ? layerTxt : ''}
            </div>
            <div className='img-box'><img src={item.img_path} alt="" /></div>
            <div className='btn-box-wrap'>
                <div className='btn-box txt-btn'>
                    <button className={'like' + (like.includes(item) ? ' on':'')} onClick={()=>{
                        !like.includes(item) ? setLike((like) => [...like, item]) : setLike(like.filter((button) => button !== item));
                       /* let likeCnt = [...like];
                        likeCnt[idx]++;
                        setLike(likeCnt);*/
                    }}>{like.includes(item) ? item.like + 1 : item.like} 개</button>
                    <button className='review'>{item.review} 개</button>
                </div>
                <div className='btn-box'>
                    <button type='button' className='share'><span className='hidden'>스크랩</span></button>
                    <button type='button' className='favorite'><span className='hidden'>즐겨찾기</span></button>
                </div>
            </div>
            <div className='txt-box'>
                <p>{item.content}</p>
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