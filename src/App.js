import Header from './layout/Header';
import Menu from './layout/Menu';
import Footer from "./layout/Footer";
import List from './pages/List';
import {useRef, useEffect} from 'react';


function App() {
  const widthInfo = useRef(null);
  useEffect(() => {
    console.log(widthInfo.current.offsetWidth);
  })

  return (
    <div id="wrap" className="dark" ref={widthInfo}>
      <Header/>
      <Menu/>
      <List/>
      <Footer/>
    </div>
  );
}

export default App;
 