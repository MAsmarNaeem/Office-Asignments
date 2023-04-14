import React from "react";

const Square = (props) => {

  return (
    <div onClick={props.onClick} style={{ border: "1px solid",width:"60px" }}>
      <h5 style={{height:"3px",width:"9px",marginLeft:"10px"}}>{props.value}</h5>
    </div>
  );
};

export default Square;
