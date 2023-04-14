// import React from 'react'
// import { useState } from 'react'

// const Myshape = () => {
//     const[myinput,setmyinput]=useState(0)
//     const[show,setshow]=useState("")

//     function notreverse() {
//         let result = "";
//         for (let i = 0; i <= myinput; i++) {
//           for (let j = 0; j <= i; j++) {
//             result += "*";
//           }
//           result += "\n";
//         }
//         setshow(result);
//       }

//   return (
//     <div>
//         <input placeholder='Enter any number' value={myinput} onChange={(e)=>setmyinput(e.target.value)}/>
//         <button onClick={notreverse}>show</button>

//     <pre>{show}</pre>
//     </div>
//   )
// }

// export default Myshape
// import React, { useState } from 'react';

// function ReverseNumber() {
//   const [number, setNumber] = useState(0);
//   const [output, setOutput] = useState("");
//   console.log("output is :",output);

//   function reverseNumber() {
//     let result = "";
//     for(let i = number; i > 0; i--) {
//       for(let j = i; j > 0; j--) {
//         result += "*";
//       }
//       result += "\n";
//       console.log("result is :",result);
//     }

//     setOutput(result);
//   }

//   return (
//     <div>
//       <input  value={number} onChange={(event) => setNumber(event.target.value)} />
//       <button onClick={reverseNumber}>Reverse</button>
//       <pre>{output}</pre>
//     </div>
//   );
// }

// export default ReverseNumber;

import React from "react";
import { useState } from "react";

const Myshape = () => {
  const [myinput, setmyinput] = useState(0);
  const [show, setshow] = useState("");
  const [myshow, mysetshow] = useState("");
  const [hloshow, hlosetshow] = useState("");

  function notreverse() {
    let result = "";
    {
      for (let i = 0; i <= myinput; i++) {
        for (let j = i; j <= myinput; j++) {
          result += " ";
        }
        for (let k = 0; k < i; k++) {
          result += "*";
          result += " ";
        }
        result += "\n";
      }
    }
    setshow(result);
    let resultthis = "";
    for (let i = myinput; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        resultthis += "*";
      }
      resultthis += "\n";
      console.log("result is :", result);
    }

    mysetshow(resultthis);
    let resultis = "";
    for (let i = 0; i <= myinput; i++) {
      for (let j = 0; j <= i; j++) {
        resultis += "*";
      }
      resultis += "\n";
    }
    hlosetshow(resultis);
  }

  return (
    <div>
      <input
        placeholder="Enter any number"
        value={myinput}
        onChange={(e) => setmyinput(e.target.value)}
      />
      <button onClick={notreverse}>show</button>
      <h4>odd stars</h4>
      <pre>{show}</pre>
      <h4>Reverse figure is </h4>
      <pre>{myshow}</pre>
      <h4>Simple figure</h4>
      <pre>{hloshow}</pre>
    </div>
  );
};
export default Myshape;
