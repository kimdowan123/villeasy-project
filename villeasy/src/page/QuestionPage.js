import Navbar from "../component/Navbar"
import FootItem from "../component/FootItem"
import Stiker from "../component/Sticker"
import MobileStiker from '../component/MobileStiker'
import ServeNav from "../component/ServeNav"
import '../css/QuestionPage.css'



function Question() {
    return (
        <div className='container2'>
            <Navbar></Navbar>
            <ServeNav></ServeNav>
            <div className='pageBox'>
                <div className="imBox">
                    <p className="QAtop">▶ 자주 하시는 질문 ◀</p>
                    <div style={{ marginTop: '50px' }}>

                        <h2 className='QAtitle'>Q1. 대여 및 반납 시간이 어떻게 되나요?</h2>
                        <div className='QAcontent'>
                            <p>✔️아래예시</p>
                            <p>ex&#41;</p>
                            <p>
                                <span style={{ fontWeight: "bold" }}>당일치기 세트</span>
                                <br />
                                대여 : 09시부터🕘
                                <br />
                                반납 : 23시까지🕚
                            </p>
                            <p>
                                <span style={{ fontWeight: "bold" }}>1박2일 세트</span>
                                <br />
                                대여 : 09시부터🕘
                                <br />
                                반납 : 23시까지🕚
                            </p>
                            <br />
                            <p style={{ color: 'red', fontSize: '10px' }}>⚠️반납 시간은 상황에 따라 달라질 수도 있습니다.⚠️</p>
                        </div>






                        <h2 className='QAtitle'>Q2. 고객님이 준비하실 물건</h2>
                        <div className="QAcontent">
                            <p>✔️화로대 이용 시 숯 또는 장작 , 집게, 가위, 도마, 칼, 가스, 담요, 티슈, 물티슈 등 위의 제품은 대여 물품에 포함되어있지 않으니 필요하신 경우 꼭! 챙겨주세요.</p>
                        </div>



                        <h2 className='QAtitle'>Q3. 분실 및 파손</h2>
                        <div className="QAcontent">
                            <p>✔️제품을 받으신 후, 제품 누락 및 이상 여부를 확인해주세요. 제품 이상 여부를 확인 즉시 연락하여 알려주시면 감사하겠습니다.
                                <br /><br />
                                위의 조치를 취하지 않으시고 사용하시면, 추후 장비에 이상을 발견하였을 때 고객님께서 사용 중 발생한 것으로 판단하여 제품 배상의 책임이 따를 수도 있습니다.<br /><br />
                                ✔️제품 사용 중 파손이나 분실되었을 경우 연락 부탁드립니다.<br /><br />

                                ✔️대여받으신 모든 물품은 분실 및 파손 시 고객님께 구매 금액의 100%가 청구될 수 있습니다.<br /><br />

                                ✔️대여 후 장비 도난에 주의하시고, 철수 시 빠진 물품이 없는지 잘 확인해주시면 감사하겠습니다.</p>
                        </div>








                    </div>

                </div>
            </div>


            <Stiker></Stiker>
            <MobileStiker></MobileStiker>
            <FootItem></FootItem>
        </div>
    )
} export default Question;