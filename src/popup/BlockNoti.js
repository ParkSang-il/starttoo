import React from 'react'

export default function Block() {
  return (
    <div className="con">
        <div className="con-in">
          <p>해당 유저 및 콘텐츠를 신고하는 이유에 대해서 알려주세요. 스타투팀에서 해당 유저 및 콘텐츠의 커뮤니티 가이드의 위반 여부를 판단하여 적절한 조치를 취하도록 하겠습니다.</p>
          <div className='select-box'>
              <select name="" id="">
                  <option value="1">게시물 신고</option>
                  <option value="2">프로필 차단</option>
              </select>
          </div>
        </div>
        <div className="btn-wrap">
            <button type="button" >취소</button>
            <button type="submit" className="t1">보내기</button>
        </div>
    </div>
  )
}
