
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Reservation from "./page/ReservationPage"
import Question from "./page/QuestionPage"
import MainPage from "./page/MainPage"
import ProductPage from './page/ProductPage';
import MapPage from './page/MapPage'
import DetailPage from './page/DetailPage'
import AdminPage from './page/Admin';
import RevisePage from './page/RevisePage';


function App() {
  

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={
          <MainPage></MainPage>
        } alt="메인페이지"></Route>

        <Route path='/home' element={
          <MainPage></MainPage>
        } alt="메인페이지"></Route>

        <Route path='/product' element={
          <ProductPage></ProductPage>
        } alt="상품페이지"></Route>

        <Route path='/detail/:id' element={
          <DetailPage></DetailPage>
        } alt="디테일페이지"></Route>

        <Route path='/reservation' element={
          <Reservation></Reservation>
        } alt="예약안내 페이지"></Route>

        <Route path='/map' element={
          <MapPage></MapPage>
        } alt="지도 페이지"></Route>

        <Route path='/question' element={
          <Question></Question>
        } alt="질문 페이지"></Route>

        <Route path="/login" element={
          <AdminPage></AdminPage>
        } alt="관리자 로그인창"></Route>

        <Route path="/revise/:id" element={
          <RevisePage></RevisePage>
        } alt="관리자 수정페이지"></Route>



        <Route path="*" element={<div>404Page</div>} />

      </Routes>

    </div>
  );
}


export default App;
