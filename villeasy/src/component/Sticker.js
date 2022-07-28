import kakao from "../img/kakao.png";
import facebook from "../img/facebook.png";
import insta from "../img/insta.png";
import '../css/sticker.css'
function Stiker() {
    return (
      <div className='stikerAll'>
        <a href="https://pf.kakao.com/_XxoxoAs"><img src={kakao} alt="kakao이미지" className='stiker1' /></a>
        <a href="https://www.instagram.com/vill_easy/"><img src={insta} alt="insta이미지" className='stiker2' /></a>
        <img src={facebook} alt="facebook이미지" className='stiker3' />
      </div>
    )
  } export default Stiker;