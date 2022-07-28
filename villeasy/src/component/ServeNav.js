import '../css/ServeNav.css'
import { useNavigate, Link } from 'react-router-dom';


function ServeNav() {
    let navigate = useNavigate();
    return (

        <div className="ServeNav">
            <ul>
                <li onClick={() => {
                    navigate('/reservation')
                }}>예약안내</li>
                <li onClick={() => {
                    navigate('/question')
                }}>Q&A</li>
                <li onClick={() => {
                    navigate('/map')
                }}>오시는길</li>
                <li>
                    <a href='https://www.naver.com' className='Gokakao'>
                        카카오톡 1:1문의
                    </a>

                </li>
            </ul>
        </div>

    )
} export default ServeNav;