import React from "react";

const Square = (props) => {

  return (
    <div onClick={props.onClick} style={{ border: "1px solid",width:"60px" }}>
      {/* <h5 disabled={props.disabled} style={{height:"3px",width:"9px",marginLeft:"10px"}}>{props.value}</h5> */}
      <button style={{border:"none" ,height:"40px",background:"none"}}  disabled={props.disabled}>{props.value}</button>
    </div>
  );
};

export default Square;

