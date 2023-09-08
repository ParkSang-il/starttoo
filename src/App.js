import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from "./layout/Footer";
import List from './pages/List';
import {useRef, useEffect, useState} from 'react';
import ModalLayout from './component/ModalLayout';


function App() {
  const widthInfo = useRef(null);
  useEffect(() => {
    //console.log(widthInfo.current.offsetWidth);
  });
  const [pop, setPop] = useState('0')//모달 종류
  return (
    <div id="wrap" className="dark" ref={widthInfo}>
      <Header pop={pop} setPop={setPop}/> {/*header*/}
      <Menu/>{/*타투메뉴*/}
      <List pop={pop} setPop={setPop}/>{/*메인리스트*/}
      {pop !== '0' ? <ModalLayout pop={pop} setPop={setPop}/> : ''}{/*로그인모달*/}
      <Footer pop={pop} setPop={setPop}/>{/*foorter*/}
    </div>
  );
}

export default App;
 