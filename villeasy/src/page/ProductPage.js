import FootItem from '../component/FootItem'; //footer 컴포넌트
import Stiker from '../component/Sticker';  //카카오,인스타,페북  스티커 컴포넌트
import Navbar from '../component/Navbar';  //navbar 컴포넌트
import MobileStiker from '../component/MobileStiker' //모바일 카톡링크 컴포넌트
import '../css/ProductPage.css'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'


function ProductPage() {
  
  let [product, setProduct] = useState([]);
  let [history, setHistory] = useState(0);
  let navigate = useNavigate();
  
  useEffect(() => {
    axios.get('/api/product').then((result) => {
      setProduct(result.data);
      console.log('데이터 전송받음')
    }).catch(() => {
      console.log('데이터 전송실패')
    })
  }, [])

  useEffect(() => {
    let box = localStorage.getItem('watched')
    let box2 = JSON.parse(box)
    setHistory(box2)
  }, [])

  //set상품 가격낮은순 정렬 코드
  let priceLow = function () {
    let copy = { ...product };
    console.log(copy)
    let result = copy.a.sort(function (a, b) {
      return a.price - b.price
    });
    setProduct({ a: result, b: copy.b })
  }

  //set 상품 가격 높은순 정렬 코드
  let priceHigh = function () {
    let copy = { ...product };

    let result = copy.a.sort(function (b, a) {
      return a.price - b.price
    });

    setProduct({ a: result, b: copy.b })
  }

  //단일상품 가격낮은순 정렬 코드
  let priceLow2 = function () {
    let copy = { ...product };

    let result = copy.b.sort(function (a, b) {
      return a.price - b.price
    })

    setProduct({ a: copy.a, b: result })
  }


  // 단일상품 가격 높은순 정렬 코드
  let priceHigh2 = function () {
    let copy = { ...product };

    let result = copy.b.sort(function (b, a) {
      return a.price - b.price
    });

    setProduct({ a: copy.a, b: result })
  }




  let myClick1 = history[history.length - 1]
  let myClick2 = history[history.length - 2]
  let myClick3 = history[history.length - 3]


  let recentProduct1 = product.a?.find(function (x) {
    return (
      x._id == myClick1
    )
  }) || product.b?.find(function (x) {
    return (
      x._id == myClick1
    )
  })


  let recentProduct2 = product.a?.find(function (x) {
    return (
      x._id == myClick2
    )
  }) || product.b?.find(function (x) {
    return (
      x._id == myClick2
    )
  })

  let recentProduct3 = product.a?.find(function (x) {
    return (
      x._id == myClick3
    )
  }) || product.b?.find(function (x) {
    return (
      x._id == myClick3
    )
  })




  return (
    <div className='container2'>

      <Navbar></Navbar>



      <div className='product-top'>

        <div className='product-top-text'>
          <p>비싼캠핑도구 때문에 캠핑가기 망설여지시나요?
            <br></br>
            <span style={{ color: 'orange' }}>빌리지</span>에서 간편하고 합리적인 가격에 캠핑도구를
            <br></br>
            대여해 이용해보세요!
          </p>
        </div>

      </div>

      <div className='historyProduct'>
        <p className='historyText'>최근본상품</p>

        <img src={recentProduct1?.imageUrl} alt="" className='historyImage' onClick={() => {
          navigate('/detail/' + recentProduct1?._id)
        }} />
        <p className='historyTitle'>{recentProduct1?.title}</p>

        <img src={recentProduct2?.imageUrl} alt="" className='historyImage' onClick={() => {
          navigate('/detail/' + recentProduct2?._id)
        }} />
        <p className='historyTitle'>{recentProduct2?.title}</p>

        <img src={recentProduct3?.imageUrl} alt="" className='historyImage' onClick={() => {
          navigate('/detail/' + recentProduct3?._id)
        }} />
        <p className='historyTitle'>{recentProduct3?.title}</p>

      </div>

      {/* ----------------------------세트상품 (반복문) ------------------------------ */}
      <br />
      <br />
      <h1 className='product-title'>세트상품
        <br />

        <span className='product-warning'>1인당 추가비용 9천원 </span>
      </h1>
      <div className='sortBox'>
        <button onClick={() => {
          priceLow();
        }}>가격낮은순</button> <button onClick={() => {
          priceHigh();
        }}>가격높은순</button>
      </div>
      <div className='testtest'>
        <div className='product-set-box'>

          <br></br>

          {/* db에서 받아온 데이터 */}
          {
            product.a?.map(function (a, i) {
              return (

                <div className='product-set'>
                  <img src={product.a[i]?.imageUrl} alt="상품이미지" className='product-img' onClick={() => {
                    navigate('/detail/' + product.a[i]?._id)
                  }} />
                  <p className='product-title-chi' style={{ color: 'orange' }}>{product.a[i]?.title}</p>
                  <p className='product-price'>가격: {product.a[i]?.price}원</p>

                </div>

              )
            })
          }

        </div>
      </div>

      {/* ----------------------------단일상품(반복문)-------------------------------- */}

      <div className='product-bottom'>
        <h1 className='product-title'>단일상품</h1>
        <div className='sortBox'>
          <button onClick={() => {
            priceLow2();
          }}>가격낮은순</button> <button onClick={() => {
            priceHigh2();
          }}>가격높은순</button>
        </div>
        <div className='testtest'>
          <div className='product-set-box'>

            <br></br>
            {
              product.b?.map(function (a, i) {
                return (
                  <div className='product-set'>
                    <img src={product.b[i]?.imageUrl} alt="상품이미지" className='product-img' onClick={() => {
                      navigate('/detail/' + product.b[i]?._id)
                    }} />
                    <p className='product-title-chi'>{product.b[i]?.title}</p>
                    <p className='product-price'>가격: {product.b[i]?.price}원</p>
                  </div>
                )
              })
            }
          </div>
        </div>



      </div>

      <Stiker></Stiker>
      <MobileStiker></MobileStiker>
      <FootItem></FootItem>




    </div>
  )

} export default ProductPage;