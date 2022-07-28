import "../css/admin.css"
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Admin() {
    let navigate = useNavigate()
    let [아이디, setId] = useState('');
    let [비번, setPw] = useState('');

    return (
        <>
            <div>
                <div className="adminBox">
                    <h3>관리자 페이지</h3>

                    <label>아이디</label>
                    <input onInput={(e) => {
                        setId(e.target.value)
                    }} />
                    <br />
                    <label>비밀번호</label>
                    <input onInput={(e) => {
                        setPw(e.target.value)
                    }} />
                    <br />
                    <br />
                    <button onClick={() => {
                        axios.post('/login3', { id: 아이디, pw: 비번 }).then((결과) => {

                            localStorage.getItem('login');
                            localStorage.setItem('login', 결과.data)

                            console.log(결과.data)
                            
                            if (결과.data == true) {
                                navigate('/revise/okpass')
                            } else {
                                alert('로그인실패임')
                            }

                        })
                    }}>로그인</button>

                </div>
            </div>
        </>
    )
}
export default Admin