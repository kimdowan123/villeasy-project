import kakao from "../img/kakao.png";
import '../css/mobileStiker.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

function MobileStiker() {
    return (
        <>
            <div className="mobileStiker">
                <FontAwesomeIcon icon={faCircleArrowUp} className="mobile1" onClick={()=>{
                        
                        window.scrollTo({top:0, left:0, behavior:'smooth'});
                        
                }}/>
                <a href="https://pf.kakao.com/_XxoxoAs"><img src={kakao} alt="kakao이미지" className="mobile2"/></a>
            </div>
        </>
    )
} export default MobileStiker;