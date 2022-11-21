import './App.css';
import Login from './components/Login';
import Copyright from './components/Copyright';
import instagram from './assets/instagram.png'
import meta from './assets/meta.png'
import  { useState } from 'react'


function App() {
  const [Appealpage, setAppealpage] = useState(false)
  const handleAppeal = ()=>{
    setAppealpage(!Appealpage)
  }
  return (
    <div className="App h-full">
      {Appealpage?<Copyright></Copyright>:<Login Appealpage={Appealpage} setAppealpage={setAppealpage} handleAppeal={handleAppeal}></Login>}

    </div>
  );
}

export default App;
