/*global kakao*/ 
import React, { useEffect } from 'react'
import "../css/map.css"


const Location=()=>{

  useEffect(()=>{
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.257676560789875, 128.6116732884527),
      level: 4
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition  = new kakao.maps.LatLng(35.257676560789875, 128.6116732884527); 
    var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);

    }, [])


    return (
        <div>

        <div id="map" className="mapping"></div>
       
        </div>
    )
}

export default Location;