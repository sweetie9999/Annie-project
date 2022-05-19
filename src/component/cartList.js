import { flexbox } from "@mui/system";
import React from "react";
import { useState, useRef } from "react";

function Cart({ image, removeCart }) {
  const [cartNum, setCartNum] = useState(0);
  const incr = useRef(null);
  const redu = useRef(null);

  const plus = () => {
    setCartNum((plusCount) => plusCount + 1);
    if (cartNum == 10) {
      incr.current.style.pointerEvents = "none";
      incr.current.style.color = "#cccccc";
    }
    if (cartNum < 10) {
      redu.current.style.pointerEvents = "auto";
      redu.current.style.color = "#000000";
    }
  };
  const minus = () => {
    setCartNum((minusCount) => minusCount - 1);
    if (cartNum == 0) {
      redu.current.style.pointerEvents = "none";
      redu.current.style.color = "#cccccc";
    }
    if (cartNum > 1) {
      incr.current.style.pointerEvents = "auto";
      incr.current.style.color = "#000000";
    }
  };

  const style = {
    wrap: {
      backgroundColor: "#eeeeee",
      width: "102px",
      height: "110px",
      border: "1px solid #cccccc",
    },
    btRight: {
      backgroundColor: "white",
      border: "none",
      width: "32.5px",
      height: "20px",
      margin: "0",
    },
    btLeft: {
      backgroundColor: "white",
      border: "none",
      width: "32.5px",
      height: "20px",
      margin: "0",
    },
    inpStyle: {
      border: "none",
      width: "35px",
      height: "20px",
      textAlign: "center",
      margin: "0",
    },
  img: {
    width: "100%",
    position: "relavive",
    display: "block",
    margin: "0 auto",
  }
};

  return (
    <div style={style.wrap}>
      <div style={{ overflow: "hidden" }}>
        <img src={image} style={style.img}></img>
      </div>
      <div style={{ paddingBottom: "5px" }}>
        <button style={style.btLeft} ref={redu} onClick={minus}>
          -
        </button>
        <input placeholder={cartNum} style={style.inpStyle} />
        <button style={style.btRight} ref={incr} onClick={plus}>
          +
        </button>
        <button
          onClick={() => removeCart()}
          //props가 아닌 이벤트를 전달하여 이 형태로 작성 됨.
          //파라미터 패스할것 없으면 그냥 removeCart 형태로만 작성해도 됨.
          //===>> onClick={ removeCart }
          style={{ width: "25px", backgroundColor: "#eeeeee", border: "none" }}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default Cart;
