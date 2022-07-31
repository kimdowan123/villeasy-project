# villeasy 프로젝트 소개
바로가기 https://villeasy.du.r.appspot.com/

![홈](https://user-images.githubusercontent.com/97826223/178409694-96eb1a90-3c25-4198-8741-031a92640487.png)

캠핑용품을 대여해주는 업체의 상품소개및 업체설명 위치안내등 이있는 사이트입니다.

# 개발인원및 기간
- 1인개발 (2주소요)
# 목적
- 친구의 부탁으로 친구가 운영하는 캠핑용품업체의 상품및 가게소개 위치등을 안내하는 서비스를 만들게 되었습니다.
# 구현 기능
- 관리자 페이지에서 로그인후 상품을 관리 할수있습니다. 서버에 axios 요청하여 DB에 상품정보를 저장 및 수정 삭제 할수 있습니다.
- 상품진열 페이지에서는 서버에 axios 요청으로 DB에서 상품정보를 불러와 볼수 있습니다.
- 카카오지도 api이용하여 업체위치를 알수있습니다.
- localstorage를 이용하여 최근본 상품목록을 볼수있습니다.
- 반응형으로 제작되어 웹,테블릿,모바일에서도 이용이 가능합니다.
# 적용 기술
## react
- useState,useEffect 등 리액트 훅사용(useState 를 이용해 웹에 즉각렌더 , useEffect 와 같은 라이플 사이클 이용해 애니메이션,상품정보 ,axios요청 등 구현)
- useNavigate,useParams 와 같은 react-router-dom 이용(useNavigate를 이용해 페이지 간 이동구현 , useParams를 이용해 상품고유id 값 전달(상품 디테일페이지 구현) )
- component 으로 페이지분리, navbar,footer등 구역분리
- Route사용으로 spa구현

## node.js
- session 로그인 (관리자 로그인시 DB에 저장되어있는 ID와PW 를 검증)
- 관리자 페이지 URL 직접접근X , 로그인성공시 접근가능
## mongoDB
- nosql db 이용

