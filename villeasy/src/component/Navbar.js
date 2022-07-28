import '../css/Nav.css'
import image from "../img/villeasy2.png";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {


  let [isOpen, setMenu] = useState(false)
  let navigate = useNavigate();
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); //clean up
    };
  }, []);
  const handleScroll = () => {
    // 스크롤이 Top에서 50px 이상 내려오면 true값을 useState에 넣어줌
    if (window.scrollY >= 50) {
      setMenu(false);
    }
  };
  return (
    <>

      <nav>
        <div className='logo'>
          <img src={image} alt='logo' width='70px'></img>
          <h1><Link to="/" className="linktag0">VILL EASY</Link></h1>
        </div>

        <div className='menu'>
          <ul>
            <li><Link to="/home" className="linktag">HOME</Link></li>
            <li><Link to="/product" className="linktag">캠핑용품</Link></li>
            <li><Link to="/reservation" className="linktag">예약안내</Link></li>
            <li><Link to="/question" className="linktag">Q&A</Link></li>
            <li><Link to="/map" className="linktag" >오시는길</Link></li>
          </ul>
        </div>
      </nav>

      <div className="hamburger">
        <div style={{ display: 'flex' }}>
          <FontAwesomeIcon icon={faBars} className="fontAsome" onClick={() => {
            setMenu(isOpen => !isOpen);
            console.log(isOpen)

          }} />
          <p className="hamburgerText" onClick={()=>{
            navigate('/home')
          }}>VILL EASY</p>
        </div>
      </div>


      <div className={isOpen == true ? "show-menu" : "hide-menu"}>
        <div className="hamburgerMenu">
          <ul>
            <li onClick={() => { navigate('/home') }}>HOME</li>
            <li onClick={() => { navigate('/product') }}>캠핑용품</li>
            <li onClick={() => { navigate('/reservation') }}>예약안내</li>
            <li onClick={() => { navigate('/question') }}>Q&A</li>
            <li onClick={() => { navigate('/map') }}>오시는길</li>
          </ul>
        </div>
      </div>




    </>





  )
} export default Navbar;