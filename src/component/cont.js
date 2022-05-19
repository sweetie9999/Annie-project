import React from "react";
import Buy from "./buy";

function Cont({ sub, main, text, image, inCart__2, removeCart }) {
  //style
  const style = {
    itemList: {
      backgroundColor: "white",
      width: "400px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "30px 40px 30px 40px",
      marginLeft: "10px",
    },
    subTitle: {
      color: "#bbbbbb",
      fontWeight: "800",
      marginBottom: "10px",
    },
    mainTitle: {
      color: "#1f1f1f",
      fontSize: "32px",
      fontWeight: "800",
      marginBottom: "10px",
      letterSpacing: "-0.3px",
    },
    sentence: {
      textAlign: "center",
      fontSize: "0.95em",
      lineHeight: "1.5em",
    },
    //img style
    imgStyle: {
      width: "105%",
    },
  };

  return (
    <div style={style.itemList}>
      <h4 style={style.subTitle}> {sub} </h4>
      <h1 style={style.mainTitle}> {main} </h1>
      <p style={style.sentence}> {text} </p>
      <div style={{ height: "223.33px", overflow: "hidden", margin: "30px 0" }}>
        <img src={image} style={style.imgStyle} />
      </div>
      <Buy inCart3={inCart__2} />
      {/* buy.js의 props인 inCart3에 inCart___2을 전달함. */}
    </div>
  );
}

export default Cont;
