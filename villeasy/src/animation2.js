import React, { useEffect, useState } from "react";
import lottie from "lottie-web";
import animationData from "./animation.json";


function Anime(props) {
  
  const container = document.querySelector("#container");
  let [count, setCount] = useState(0);

  useEffect(() => {

    let a = setTimeout(() => {
      setCount(count + 1);
    }, 10)
    console.log(a)
    lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });


  }, [container]);
  return (
    <>
      <div id="container" style={{ width: "200px", margin: "0 auto", marginTop: "100PX" }}></div>
    </>
  )
}

export default Anime;