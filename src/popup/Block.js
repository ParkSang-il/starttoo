import React from 'react'

export default function Block() {
  return (
    <div className="con">
        <div className="con-in">
          <p>정말로 차단하시겠어요? 더 이상 해당 유저의 콘텐츠를 확인 할 수 없습니다. 차단하더라도 해당 유저에게 어떠한 알람도 전송되지 않습니다.</p>
        </div>
        <div className="btn-wrap">
            <button type="button" >취소</button>
            <button type="submit" className="t1">차단</button>
        </div>
    </div>
  )
}
