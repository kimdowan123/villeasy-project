import Navbar from '../component/Navbar.js';
import FootItem from '../component/FootItem.js';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import '../css/DetailPage.css'
import axios from 'axios';


function DetailPage() {
    let [product, setProduct] = useState([]);

    useEffect(() => {

        axios.get('/api/product').then((result) => {
            setProduct(result.data);
            console.log('데이터 전송받음')
            console.log(result.data)

        }).catch(() => {
            console.log('데이터 전송실패')
        })

    }, [])



    useEffect(() => {
        window.scrollTo(0, 0)
    });

    let { id } = useParams();
    let myProduct = product.a?.find(function (x) {
        return (
            x._id == id
        )
    })

    let myProduct2 = product.b?.find(function (x) {
        return (
            x._id == id
        )
    });




    useEffect(() => {

        let recentProduct = localStorage.getItem('watched')
        recentProduct = JSON.parse(recentProduct)
        recentProduct.push(parseInt(id))
        localStorage.setItem('watched', JSON.stringify(recentProduct))


        //연속된 배열값 제거

        var answer = [];
        for (var i = 0; i < recentProduct.length - 1; i++) {
            if (recentProduct[i] !== recentProduct[i + 1]) {
                answer.push(recentProduct[i]);
            }
        }
        answer.push(recentProduct[recentProduct.length - 1]);
        console.log(answer);
        localStorage.setItem('watched', JSON.stringify(answer))



    }, [])

    let [tab, setTab] = useState('')
    let [tab2, setTab2] = useState('')
    useEffect(() => {
        setTab('orange')
    }, [])

    let [탭상자, 탭상자변경] = useState(0)


    // console.log(myProduct2?.photo1)


    return (
        <>
            <div className="container2">
                <Navbar></Navbar>

                <div style={{ marginTop: '55px' }}></div>
                <div className='detailBox-Top' id='move'>
                    <img src={myProduct?.imageUrl || myProduct2?.imageUrl} alt="상품이미지" className='detailImage-Top' />

                    <div className='detail-top-box'>
                        <br />
                        <p className='detail-top-title'># {myProduct?.title}{myProduct2?.title}</p>
                        <p className='detail-top-price'>가격: {myProduct?.price}{myProduct2?.price}원</p>
                        <p className='detail-top-content'>
                            구성 :
                            <br />
                            {myProduct?.content}{myProduct2?.content}
                        </p>
                        <p className='detail-top-help'>
                            안내사항:
                            <br />
                            {myProduct?.help} {myProduct2?.help}
                            <br />
                            <br />
                            규격:
                            <br />
                            {myProduct?.standard} {myProduct2?.standard}
                        </p>


                        <br />
                        <div className='kakaoBTN-TOP'>
                            <a href="https://pf.kakao.com/_XxoxoAs">
                                <div className='kakaoBTN'>
                                    <button>카카오톡 문의하기</button>
                                </div>
                            </a>
                        </div>
                        <p className='kakaoBTN-BOTTOM'>(※결제는 카카오톡으로 문의 부탁드립니다※)</p>

                    </div>

                </div>

                <div className='Tab'>
                    <div className={`BTN1 ${tab}`} onClick={() => {
                        setTab('orange')
                        setTab2('')
                        탭상자변경(0)
                    }}>
                        <div>상세보기</div>
                    </div>
                    <div className={`BTN2 ${tab2}`} onClick={() => {
                        setTab('')
                        setTab2('orange2')
                        탭상자변경(1)

                    }}>
                        <div>분실/파손</div>
                    </div>
                </div>

                {/* <div style={{ height:'auto', minHeight:'100%',paddingBottom:'150vh'}}> */}
                {
                    탭상자 == 0 ? <div className='TabBox'>
                        <h2>상세사진</h2>
                        <br />
                        <br />
                        {/* 세트상품 상세 */}

                        {
                            myProduct?._id == id ? <> <img src={myProduct?.photo1} alt=""></img><br></br> </> : null
                        }

                        {
                            myProduct?._id == id ? <> <img src={myProduct?.photo2} alt=""></img><br></br> </> : null
                        }

                        {
                            myProduct?._id == id ? <> <img src={myProduct?.photo3} alt=""></img> <br></br> </> : null
                        }
                        {/* 단일상품 상세 */}

                        {
                            myProduct2?._id == id ? <img src={myProduct2?.photo1} alt=""></img> : null
                        }
                        {
                            myProduct2?._id == id ? <img src={myProduct2?.photo2} alt=""></img> : null
                        }
                        {
                            myProduct2?._id == id ? <img src={myProduct2?.photo3} alt=""></img> : null
                        }





                    </div> : null
                }

                {
                    탭상자 == 1 ? <div className='TabBox'>
                        <h2>분실 및 파손</h2>
                        <p>✔️제품을 받으신 후, 제품 누락 및 이상 여부를 확인해주세요. 제품 이상 여부를 확인 즉시 연락하여 알려주시면 감사하겠습니다.
                            <br /><br />
                            (위의 조치를 취하지 않으시고 사용하시면, 추후 장비에 이상을 발견하였을 때 고객님께서 사용 중 발생한 것으로 판단하여 제품 배상의 책임이 따를 수도 있습니다.)<br /><br />
                            ✔️제품 사용 중 파손이나 분실되었을 경우 연락 부탁드립니다.<br /><br />

                            ✔️대여받으신 모든 물품은 분실 및 파손 시 고객님께 구매 금액의 100%가 청구될 수 있습니다.<br /><br />

                            ✔️대여 후 장비 도난에 주의하시고, 철수 시 빠진 물품이 없는지 잘 확인해주시면 감사하겠습니다.</p>
                    </div> : null
                }


                {/* </div> */}

                <FootItem></FootItem>
            </div>
        </>
    )
} export default DetailPage;