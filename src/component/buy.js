import React from "react";
import { useState, useRef } from "react";
import "../css/main.css";

//MUI
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { ClassNames } from "@emotion/react";


function Buy({inCart3}) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const incr = useRef(null);
  const redu = useRef(null);


  let increaseHandler = () => {
    redu.current.style.pointerEvents = "auto";
    redu.current.style.filter = "opacity(1)";
    if (num >= 0 && num < 10) {
      // incr.current.className = "bady";
      // incr.current.style.backgroundColor = "red";
      const new_num = num + 1;
      setNum(new_num);
      if (new_num == 0) {
        console.log("change left inactive");
      } else if (new_num == 10) {
        incr.current.style.pointerEvents = "none";
        incr.current.style.filter = "opacity(0.5)";
        console.log("change right inactive");
      }
    }
  };

  let reduction = () => {
    incr.current.style.pointerEvents = "auto";
    incr.current.style.filter = "opacity(1)";
    if (num > 0) {
      const new_num = num - 1;
      setNum(new_num);
      if (new_num == 0) {
        redu.current.style.pointerEvents = "none";
        redu.current.style.filter = "opacity(0.5)";
      }
    }
  };

  //Buy style
  const cart = {
    backgroundColor: "white",
    border: "1px solid gray",
    width: "150px",
    height: "50px",
  };
  const buy = {
    marginTop: "30px",
    backgroundColor: "white",
    border: "1px solid gray",
    width: "100%",
    height: "50px",
  };
  //button style
  const bt_align = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const btStyle_right = {
    backgroundColor: "white",
    border: "1px solid gray",
    width: "30px",
    height: "30px",
    margin: "0",
  };
  const btStyle_left = {
    backgroundColor: "white",
    border: "1px solid gray",
    width: "30px",
    height: "30px",
    margin: "0",
    pointerEvents: "none",
    filter: "opacity(0.5)",
  };

  const inpStyle = {
    backgroundColor: "#e8e8e8",
    border: "none",
    width: "35px",
    height: "30px",
    textAlign: "center",
    margin: "0",
  };


//Num
const [num, setNum] = useState(0);
const updateNum = (e) => {
  const { target: { value }} = e;
  setNum(value);
};


  return (
    <div style={{ margin: "0", width: "100%" }}>
      <div className="bt_align">
        <div style={{ margin: "0" }}>
          <button ref={redu} style={btStyle_left} onClick={reduction}>
            -
          </button>
          <input
            style={inpStyle}
            placeholder="0"
            value={num}
            onChange={updateNum}
          />
          <button
            ref={incr}
            // className="INCR"
            style={btStyle_right}
            onClick={increaseHandler}
          >
            +
          </button>
        </div>
        <div style={{ margin: "0" }}>
          <button style={cart}
          onClick={(e) => inCart3('e')}>CART</button>
        </div>
      </div>
      <button
        style={buy}
        onClick={() => {
          num < 1 ? setOpen2(true) : setOpen(true);
        }}
      >
        BUY
      </button>
      {/* Dialog */}
      <Dialog open={open} style={{ textAlign: "center" }}>
        <DialogTitle>SUCCESS</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {num}units
            <br />
            <br />
            <Button
              onClick={() => {
                setOpen(false);
              }}
            >
              CLOSE
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>

      <Dialog open={open2} style={{ textAlign: "center" }}>
        <DialogTitle>!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {num}units
            <br />
            cannot be implemented
            <br />
            <br />
            <Button
              onClick={() => {
                setOpen2(false);
              }}
            >
              CLOSE
            </Button>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Buy;
