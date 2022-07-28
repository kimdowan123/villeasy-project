import Stiker from "../component/Sticker"
import FootItem from "../component/FootItem"
import Navbar from "../component/Navbar"
import MobileStiker from '../component/MobileStiker'
import ServeNav from '../component/ServeNav'
import '../css/ReservationPage.css'

function Reservation() {
    return (
        <div className='container2'>
            
            <Navbar></Navbar>
            <ServeNav></ServeNav>
            <div className='pageBox'>
                <div className="imBox">
                    <p className="pageBoxT">▶ 빌리지 예약방법 ◀</p>
                    <div style={{ marginTop: '50px' }}>

                        
                        <h2 className="ReservationQ1">1. 카카오톡 플러스 친구 추가 후 희망하는 세트 , 이용 인원 , 추가할 옵션등을 정확히 알려주세요.</h2>

                        <div className="ReservationA">
                            <p>ex &#41;</p>
                            <p>✔️ A세트 , 4인 이용 , 테이블 1개 추가</p>
                            <p>✔️ C세트 , 2인 이용 , 코펠, 접시4개 , 식기류 </p>

                            <p style={{ color: 'red', marginTop: '20px',fontSize:'10px' }}> ⚠️위의 사항을 참고하시면 예약 상담이 원활히 진행됩니다⚠️</p>
                        </div>

                        <br></br>
                        <h2 className="ReservationQ1">2.대여 및 반납 시간을 말씀해주세요. </h2>
                        <p></p>
                        <div className="ReservationA">
                            <p>ex &#41;</p>
                            <p>🕘 대여 : 3월 1일 16시</p>
                            <p>🕘 반납 : 3월 1일 23시</p>
                            <p style={{ color: 'red', marginTop: '20px' ,fontSize:'10px' }}> ⚠️위의 사항을 참고하시면 예약 상담이 원활히 진행됩니다⚠️</p>
                        </div>

                    </div>

                </div>
            </div>
            
          
            <Stiker></Stiker>
            <MobileStiker></MobileStiker>
            <FootItem></FootItem>
        </div>
    )
} export default Reservation;