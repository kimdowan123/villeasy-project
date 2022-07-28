import villeasy from '../img/villeasy3.png';
import '../css/footer.css'
function FootItem() {
  return (
    <footer>
      <div className='foot'>
        
          <img src={villeasy} alt="logo" width='130px' />
          <div className='footer1'>
            <p><span className='footer-title'>업체명</span> : 빌리지 (캠핑용품대여점)</p>
            <p><span className='footer-title'>대표</span> : 최지훈</p>
            <p><span className='footer-title'>Tel</span> : 010-2089-8720</p>
            <p><span className='footer-title'>사업자 등록번호</span> : 805-65-00419 </p>
          </div>

          <div className='footer2'>
            <p><span className='footer-title'>Email</span> : wlgns8720@gmail.com</p>
            <p><span className='footer-title'>주소</span> : 경상남도 창원시 의창구 팔용로447번길 22 1/2층</p>
          </div>
        </div>
      
    </footer>
  )
} export default FootItem;
