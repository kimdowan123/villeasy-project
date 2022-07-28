import Navbar from '../component/Navbar';
import FootItem from '../component/FootItem';
import Stiker from '../component/Sticker';
import Location from '../component/location';
import MobileStiker from '../component/MobileStiker'
import ServeNav from '../component/ServeNav';
import '../css/MapPage.css'
function Map() {
  return (
    <div className='container2'>
      <Navbar></Navbar>
      <ServeNav></ServeNav>
      <div className='pageBox'>
        <div className='PageBoxChild'>
          <p className="pageBoxT">▶ 빌리지 오시는길 ◀</p>
          <div className='mapBox' style={{ marginTop: '50px' }}>

            <div className='mapItem'>
              <Location></Location>
            </div>

            <div className='mapItem2'>
              <div className='mapItem2-logo'>
                <p className='kakaoTalk'>(click!) 카카오지도로 이동합니다.</p>
                <div className='kakaoMap'><a href="http://kko.to/whaPTyTQI"><img src="/image/kakaomap.png" alt="" style={{ width: '150px', marginBottom: '30px', marginTop: '15px', cursor: 'pointer' }} /></a></div>
              </div>
              <p className='mapTitle'>📌빌리지(캠핑용품대여점)</p>
              <p className='mapContent'>경상남도 창원시 의창구 팔용로447번길 22</p>

              <p className='mapTitle'>📞전화번호</p>
              <p className='mapContent'>010-2089-8720</p>
            </div>

          </div>

        </div>
      </div>

      <Stiker></Stiker>
      <MobileStiker></MobileStiker>
      <FootItem></FootItem>
    </div>
  )
} export default Map;