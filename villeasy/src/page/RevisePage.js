
import { useEffect, useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../css/revisePage.css'




function RevisePage() {

    let navigate = useNavigate();

    useEffect(() => {
        let box = localStorage.getItem('login')
        console.log(box)

        //로그인 성공시 데이터요청,if문 true값
        if (localStorage.getItem('login') == 'true') {
            setLogin(true)

            axios.get('/api/product').then((result) => {

                setProduct(result.data);
                console.log('데이터 전송받음')
                console.log(result.data)

            }).catch(() => {
                console.log('데이터 전송실패')
            })

        } else {
            setLogin(false)
        }

        //url 직접입력시 loginc=창으로 돌아가기
        if (localStorage.getItem('login') == 'undefined') {
            navigate('/login')
        }
    }, [])



    let [blackBG, setBlackBG] = useState(false)
    let [blackBG2, setBlackBG2] = useState(false)

    let [blackBG3, setBlackBG3] = useState(false)
    let [blackBG4, setBlackBG4] = useState(false)

    let [product, setProduct] = useState([]);

    let [누른거, 누른거변경] = useState()
    let [login, setLogin] = useState(false);



    return (
        <>

            {
                login == true ? <div className="container2">

                    <br />
                    <br />
                    <br />
                    {/*세트상품 넣기 페이지 */}
                    {
                        blackBG == true ?

                            <div className='blackBG'>
                                <div className='whiteBG'>
                                    <form action="/add" method="POST">
                                        <h2 style={{ marginTop: '30px' }}>세트상품 추가</h2>
                                        <div className='reviseBox' style={{ marginTop: '50px' }}>
                                            <div className='reviseBoxChild'>ID : </div>
                                            <input type="text" name="_id" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>이미지URL  : </div>
                                            <input type="text" name="imageUrl" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품타이틀  : </div>
                                            <input type="text" name="title" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품가격  : </div>
                                            <input type="text" name="price" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품구성  : </div>
                                            <input type="text" name="content" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품안내  : </div>
                                            <input type="text" name="help" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품규격  : </div>
                                            <input type="text" name="standard" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진1  : </div>
                                            <input type="text" name="photo1" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진2  : </div>
                                            <input type="text" name="photo2" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진3  : </div>
                                            <input type="text" name="photo3" />
                                        </div>

                                        <br />

                                        <div className='reviseBox'>
                                            <div style={{ margin: '0 auto' }}>
                                                <button type="submit">확인</button> &nbsp;&nbsp;

                                                <button onClick={() => {
                                                    setBlackBG(false)
                                                }}>닫기</button>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>

                            : null
                    }

                    {/*세트상품 수정 페이지 */}
                    {
                        blackBG3 == true ?

                            <div className='blackBG'>
                                <div className='whiteBG'>
                                    <form action="/okpass?_method=PUT" method="POST">
                                        <h2 style={{ marginTop: '15px' }}>세트상품 수정</h2>
                                        <div className='reviseBox' style={{ marginTop: '50px' }}>
                                            <div className='reviseBoxChild'>ID : </div>
                                            <input type="text" name="_id" defaultValue={product.a[parseInt(누른거)]?._id} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>이미지URL  : </div>
                                            <input type="text" name="imageUrl" defaultValue={product.a[parseInt(누른거)]?.imageUrl} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품타이틀  : </div>
                                            <input type="text" name="title" defaultValue={product.a[parseInt(누른거)]?.title} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품가격  : </div>
                                            <input type="text" name="price" defaultValue={product.a[parseInt(누른거)]?.price} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품구성  : </div>
                                            <input type="text" name="content" defaultValue={product.a[parseInt(누른거)]?.content} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품안내  : </div>
                                            <input type="text" name="help" defaultValue={product.a[parseInt(누른거)]?.help} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품규격  : </div>
                                            <input type="text" name="standard" defaultValue={product.a[parseInt(누른거)]?.standard} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진1  : </div>
                                            <input type="text" name="photo1" defaultValue={product.a[parseInt(누른거)]?.photo1} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진2  : </div>
                                            <input type="text" name="photo2" defaultValue={product.a[parseInt(누른거)]?.photo2} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진3  : </div>
                                            <input type="text" name="photo3" defaultValue={product.a[parseInt(누른거)]?.photo3} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div style={{ margin: '0 auto' }}>
                                                <button type="submit">확인</button> &nbsp;&nbsp;
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>

                            : null
                    }

                    {/*단일상품 넣기 페이지 */}
                    {
                        blackBG2 == true ?

                            <div className='blackBG'>
                                <div className='whiteBG'>
                                    <form action="/add2" method="POST">
                                        <h2 style={{ marginTop: '30px' }}>단일상품 추가</h2>
                                        <div className='reviseBox' style={{ marginTop: '50px' }}>
                                            <div className='reviseBoxChild'>ID : </div>
                                            <input type="text" name="_id" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>이미지URL  : </div>
                                            <input type="text" name="imageUrl" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품타이틀  : </div>
                                            <input type="text" name="title" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품가격  : </div>
                                            <input type="text" name="price" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품구성  : </div>
                                            <input type="text" name="content" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품안내  : </div>
                                            <input type="text" name="help" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품규격  : </div>
                                            <input type="text" name="standard" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진1  : </div>
                                            <input type="text" name="photo1" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진2  : </div>
                                            <input type="text" name="photo2" />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진3  : </div>
                                            <input type="text" name="photo3" />
                                        </div>
                                        <br />

                                        <div className='reviseBox'>
                                            <div style={{ margin: '0 auto' }}>
                                                <button type="submit">확인</button> &nbsp;&nbsp;

                                                <button onClick={() => {
                                                    setBlackBG2(false)
                                                }}>닫기</button>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                            </div>

                            : null
                    }

                    {/*단일상품 수정 페이지 */}
                    {
                        blackBG4 == true ?

                            <div className='blackBG'>
                                <div className='whiteBG'>
                                    <form action="/okpass2?_method=PUT" method="POST">
                                        <h2 style={{ marginTop: '15px' }}>단일상품 수정</h2>
                                        <div className='reviseBox' style={{ marginTop: '50px' }}>
                                            <div className='reviseBoxChild'>ID : </div>
                                            <input type="text" name="_id" defaultValue={product.b[parseInt(누른거)]?._id} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>이미지URL  : </div>
                                            <input type="text" name="imageUrl" defaultValue={product.b[parseInt(누른거)]?.imageUrl} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품타이틀  : </div>
                                            <input type="text" name="title" defaultValue={product.b[parseInt(누른거)]?.title} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품가격  : </div>
                                            <input type="text" name="price" defaultValue={product.b[parseInt(누른거)]?.price} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품구성  : </div>
                                            <input type="text" name="content" defaultValue={product.b[parseInt(누른거)]?.content} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품안내  : </div>
                                            <input type="text" name="help" defaultValue={product.b[parseInt(누른거)]?.help} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>상품규격  : </div>
                                            <input type="text" name="standard" defaultValue={product.b[parseInt(누른거)]?.standard} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진1  : </div>
                                            <input type="text" name="photo1" defaultValue={product.b[parseInt(누른거)]?.photo1} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진2  : </div>
                                            <input type="text" name="photo2" defaultValue={product.b[parseInt(누른거)]?.photo2} />
                                        </div>

                                        <div className='reviseBox'>
                                            <div className='reviseBoxChild'>추가사진3  : </div>
                                            <input type="text" name="photo3" defaultValue={product.b[parseInt(누른거)]?.photo3} />
                                        </div>


                                        <div className='reviseBox'>
                                            <div style={{ margin: '0 auto' }}>
                                                <button type="submit">확인</button> &nbsp;&nbsp;

                                            </div>
                                        </div>

                                    </form>
                                </div>
                            </div>

                            : null
                    }





                    <h1 className='adminText'>=========관리자페이지=========</h1>

                    <h1 className='product-title'>세트상품
                        <br />
                        <br />


                        <span className='product-warning'><button onClick={() => {
                            setBlackBG(true)
                        }}>새상품추가</button></span>
                    </h1>
                    <div className='testtest'>

                        <div className='product-set-box'>
                            <br></br>
                            {
                                product.a?.map(function (a, i) {
                                    return (

                                        <div className='product-set' style={{ border: '1px solid black', padding:'10px' }}>
                                            <img src={product.a[i]?.imageUrl} alt="상품이미지" className='product-img' />
                                            <br />
                                            <br />
                                            <h2 style={{ color: 'gray', marginBottom: '10px' }}>id:{product.a[i]?._id}</h2>
                                            <h2 style={{ color: 'gray', marginBottom: '10px', fontSize: '22px' }}>{product.a[i]?.title}</h2>
                                            <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>가격: {product.a[i]?.price}원</p>
                                            <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>구성: {product.a[i]?.content}</p>
                                            <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>안내사항: {product.a[i]?.help}</p>
                                            <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>상품규격: {product.a[i]?.standard}</p>
                                            <br />
                                            <img src={product.a[i]?.photo1} alt="추가이미지1" className='product-img' />
                                            <br />
                                            <img src={product.a[i]?.photo2} alt="추가이미지2" className='product-img' />
                                            <br />
                                            <img src={product.a[i]?.photo3} alt="추가이미지3" className='product-img' />

                                            <br />
                                            <button data-id={product.a[i]._id} onClick={(e) => {

                                                let 글번호 = e.target.dataset.id;
                                                console.log(글번호)
                                                axios.post('/delete', { _id: 글번호 })

                                                window.location.reload(); //화면 강제로 새로고침 // 상품삭제후 리로드 되야 화면적용되서...

                                            }}>삭제</button>&nbsp;&nbsp;

                                            <button data-id={product.a[i]._id} onClick={(e) => {

                                                let 글번호 = e.target.dataset.id;
                                                console.log(글번호)
                                                axios.put('/okpass', { _id: 글번호 })
                                                누른거변경([i])

                                                setBlackBG3(true)
                                            }}>수정</button>
                                            <div style={{ height: '50px' }}></div>
                                        </div>

                                    )
                                })
                            }
                        </div>

                    </div>



                    <div>
                        <h1 className='product-title'>단일상품
                            <br />
                            <br />
                            <span className='product-warning'><button button onClick={() => {
                                setBlackBG2(true)
                            }}>새상품추가</button></span>
                        </h1>
                        <div className='testtest'>
                            <div className='product-set-box'>

                                <br></br>
                                {
                                    product.b?.map(function (a, i) {
                                        return (
                                            <div className='product-set' style={{ border: '1px solid black' , padding:'10px'}}>
                                                <img src={product.b[i]?.imageUrl} alt="상품이미지" className='product-img' />
                                                <br />
                                                <br />
                                                <h2 style={{ color: 'gray', marginBottom: '10px' }}>id:{product.b[i]?._id}</h2>
                                                <h2 style={{ color: 'gray', marginBottom: '10px' }}>{product.b[i]?.title}</h2>
                                                <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>가격: {product.b[i]?.price}원</p>
                                                <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>구성: {product.b[i]?.content}</p>
                                                <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>안내사항: {product.b[i]?.help}</p>
                                                <p style={{ fontWeight: 'bold', marginBottom: '10px', whiteSpace: 'initial' }}>상품규격: {product.b[i]?.standard}</p>
                                                <br />
                                                <img src={product.b[i]?.photo1} alt="추가이미지1" className='product-img' />
                                                <br />
                                                <img src={product.b[i]?.photo2} alt="추가이미지2" className='product-img' />
                                                <br />
                                                <img src={product.b[i]?.photo3} alt="추가이미지3" className='product-img' />
                                                <br />

                                                <button data-id={product.b[i]._id} onClick={(e) => {

                                                    let 글번호 = e.target.dataset.id;
                                                    console.log(글번호)
                                                    axios.post('/delete2', { _id: 글번호 })

                                                    window.location.reload(); //화면 강제로 새로고침 // 상품삭제후 리로드 되야 화면적용되서...
                                                }}>삭제</button>&nbsp;&nbsp;

                                                <button data-id={product.b[i]._id} onClick={(e) => {

                                                    let 글번호 = e.target.dataset.id;
                                                    console.log(글번호)
                                                    axios.put('/okpass2', { _id: 글번호 })
                                                    누른거변경([i])

                                                    setBlackBG4(true)
                                                }}>수정</button>
                                                <div style={{ height: '50px' }}></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>

                </div> : null
            }



        </>
    )
} export default RevisePage;