import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from "./layout/Footer";
import List from './pages/List';
import {useRef, useEffect, useState} from 'react';
import ModalLogin from './component/ModalLogin';


function App() {
  const widthInfo = useRef(null);
  useEffect(() => {
    console.log(widthInfo.current.offsetWidth);
  });

  const [login, notLogin] = useState(false); // 모달창 


  return (
    <div id="wrap" className="dark" ref={widthInfo}>
      <Header login={login} notLogin={notLogin}/> {/*header*/}
      <Menu/>{/*타투메뉴*/}
      <List/>{/*메인리스트*/}
      {login !== false ? <ModalLogin login={login} notLogin={notLogin}/> : ''}{/*로그인모달*/}
      <Footer login={login} notLogin={notLogin}/>{/*foorter*/}
    </div>
  );
}

export default App;
 