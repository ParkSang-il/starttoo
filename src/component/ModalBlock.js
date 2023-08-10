import React,{useEffect} from 'react';

function ModalBlock(props) {
    function layerClose(){
        props.close(false);
    }
    //모달창 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
        document.body.style.overflow = 'unset';
        };
      }, []);

    return (
        <div className={'view-layer-wrap block ' + (props.open ? 'on':'')}>
            <div className='bg' onClick={layerClose}></div>
            <div className='in'>
                <div className='tit'>
                    <h1>신고</h1>
                </div>
                <div className='con'>
                    <p>해당 유저 및 콘텐츠를 신고하는 이유에 대해서 알려주세요. 스타투팀에서 해당 유저 및 콘텐츠의 커뮤니티 가이드의 위반 여부를 판단하여 적절한 조치를 취하도록 하겠습니다.</p>
                    <div className='select-box'>
                        <select name="" id="">
                            <option value="1">게시물 신고</option>
                            <option value="2">프로필 차단</option>
                        </select>
                    </div>
                </div>
            </div>           
        </div>
    );
}

export default ModalBlock;