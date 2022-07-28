import Navbar from "../component/Navbar"
import Stiker from "../component/Sticker"
import Anime from "../animation2"
import "../css/MainPage.css"
import { useEffect } from 'react'


function MainPage() {

  useEffect(() => {
    if (localStorage.getItem('watched') == null) {
      localStorage.setItem('watched', JSON.stringify([]));
    }
    localStorage.setItem('login', JSON.stringify())
  }, [])
  
  return (
    <>
      <div className='container'>
        <Navbar></Navbar>
        <Anime></Anime>
        <h1 className="MainPageTitle">캠핑?! <span style={{ color: 'orange' }}>빌-려서 쉽게</span>&nbsp;가자 !! <br />
          안녕하세요. 빌리지입니다.
        </h1>


        <Stiker></Stiker>
      </div>
    </>
  )
} export default MainPage;