import React, { useState } from 'react'

export default function Profile() {
  const checkBoxList =[
    {en:'watercolor',ko:'수채화 타투'},
    {en:'irezumi', ko:'이레즈미'},
    {en:'oldschool', ko:'올드스쿨'},
    {en:'drawing', ko:'드로잉/낙서'},
    {en:'lettering', ko:'레터링'},
    {en:'mini', ko:'미니타투'},
    {en:'black', ko:'블랙워크'},
    {en:'orientalpainting', ko:'동양화/수채화'},
    {en:'flower', ko:'꽃/식물'},
    {en:'newschool', ko:'뉴스쿨'},
    {en:'illust', ko:'일러스트'},
    {en:'ani', ko:'애니메이션'}
  ];
  const [check, setCheck] = useState(false);
  console.log(checkBoxList.length);
  return (
    <div className='con'>
        <div className='profile-form'>
            <ul>
                <li>
                    <strong>닉네임 <span className='col'>*</span></strong>
                    <div className='input-box'>
                        <label htmlFor="nickName" className='hidden'>닉네임</label>
                        <input type="text" id='nickName' maxLength='20' placeholder='닉네임을 입력해주세요.'/>
                        <span className="txt-length"><span>8</span>/20</span>
                    </div>
                    <p className='ps-txt lang on'>한글 / 영문 / 숫자/ 특수기호 (_),(.) 로 설정</p>
                    <p className='ps-txt duplication on'>사용 가능한 닉네임</p>
                    <ul className='basic-list'> 
                        <li>닉네임은 30일 내 최대 3번까지 수정 가능합니다. (0/3)</li>
                        <li>닉네임 변경 시 이전 닉네임은 다시 사용하실 수 없습니다.</li>
                    </ul>
                </li>
                <li>
                    <strong>좋아하는 타투를 3개 이상 선택하세요 <span>* 최대 5개</span></strong>
                    <div className='check-box list'>
                        {checkBoxList.map((item,idx)=>(
                            <div>
                                <input type="checkbox" id={item.en} key={idx}/>
                                <label htmlFor={item.en}>{item.ko}</label>
                            </div>
                        ))}
                    </div>
                </li>
                <li>
                    <strong>스타투 서비스 이용약관에 동의해주세요</strong>
                    <div className='check-box'>
                        <ul>
                            <li>
                                <input type="checkbox" id='all'/>
                                <label htmlFor="all">전체 동의</label>
                            </li>
                            <li>
                                <input type="checkbox" id='chk1' name='agree'/>
                                <label htmlFor="chk1"><span>서비스 이용 약관</span> 동의 (필수)</label>
                            </li>
                            <li>
                                <input type="checkbox" id='chk2' name='agree'/>
                                <label htmlFor="chk2"><span>개인 정보 처리 방침</span> 동의 (필수)</label>
                            </li>
                            <li>
                                <input type="checkbox" id='chk3' name='agree'/>
                                <label htmlFor="chk2"><span>마케팅 수신</span> 동의 (필수)</label>
                            </li>
                        </ul>
                        <p className='ps-txt on'>필수 약관에 모두 동의해주세요.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}
