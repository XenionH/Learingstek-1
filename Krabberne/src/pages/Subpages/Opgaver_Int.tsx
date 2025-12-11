import { flex } from "@mui/system";
import React, { useEffect } from "react";
//import JSscript from "../assets/script.js";

function Opgaver_Int() {
  /*useEffect(()=>{
    const script = document.createElement('script')
script = })
*/
  var list = {
    background: "hotpink",
    height: "60px",
    width: "220px",
    margin: "30px",
    color: "#fff",
    display: "flex",
    alignitems: "center",
    cursor: "grab",
    borderradius: "10px",
    justifycontent: "center",
  };
  var left = {
    width: "300px",
    minheight: "400px",
    margin: "20px",
    border: "2px dashed #fff",
    borderradius: "5px",
  };
  var right = {
    width: "300px",
    minheight: "400px",
    margin: "20px",
    border: "2px dashed #fff",
    borderradius: "5px",
  };
  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      {" "}
      <div id="left" style={left}>
        <div className="list" style={list} draggable="true" id="solution1">
          Object Solution 1
        </div>
        <div className="list" style={list} draggable="true" id="solution2">
          Object Solution 2
        </div>
        <div className="list" style={list} draggable="true" id="solution3">
          Object Solution 3
        </div>
        <div className="list" style={list} draggable="true" id="solution4">
          Object Solution 4
        </div>
      </div>
      <div id="right" style={right}></div>
    </div>
  );
}

export default Opgaver_Int;
