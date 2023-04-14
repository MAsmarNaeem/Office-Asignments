
import "./App.css";
import { useState } from "react";
import Calculaor from "./Calculaor";

 import Mycal from './Mycal'

function App() {
  const [input, setinput] = useState("");

  const handler = (e) => {
    setinput(input.concat(e.target.value));
  };

  console.log("input :", input);

  const clearhandler = () => {
    setinput("");
  };
  const backhandler = () => {
    setinput(input.slice(0, input.length - 1));
  };

  const resulthandler = () => {
    try {
      setinput(eval(input).toString());
    } catch (error) {
      setinput("Error");
    }
  };

  return (
    <div className="app">
      <div className="box1">
        <div>
          <input className="input" value={input} type="text" />
        </div>
        <div className="">
          <div className="B1">
            <button onClick={handler} value="1" className="B">
              1
            </button>
            <button className="B" onClick={handler} value="2">
              2
            </button>
            <button className="B" onClick={handler} value="3">
              3
            </button>
            <button className="B" onClick={backhandler}>
              d
            </button>

            <button className="B" onClick={handler} value="4">
              {" "}
              4
            </button>
            <button className="B" onClick={handler} value="5">
              5
            </button>
            <button className="B" onClick={handler} value="6">
              6
            </button>
            <button className="B" onClick={clearhandler}>
              c
            </button>

            <button className="B" onClick={handler} value="7">
              7
            </button>
            <button className="B" onClick={handler} value="8">
              8
            </button>

            {/* </div>
              <div className='B1'>  */}
            <button className="B" onClick={handler} value="9">
              9
            </button>
            <button className="B" onClick={resulthandler}>
              =
            </button>

            <button className="B" onClick={handler} value="+">
              +
            </button>
            <button className="B" onClick={handler} value="0">
              0
            </button>
            <button className="B" onClick={handler} value="-">
              -
            </button>

            <button className="B" onClick={handler} value="/">
              /
            </button>
            <button className="B" onClick={handler} value="*">
              x
            </button>
          </div>
        </div>
      </div>

           <Mycal/>
           <Calculaor/>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import Square from "./Square";

// const App = () => {
//   const [thisstate, setthisstate] = useState(Array(9).fill(null));
//   const [turn, setturn] = useState(true);
//   const handlerclick = (index) => {
//     console.log("hanmd:", index);
//     const mycopy = [...thisstate];
//     mycopy[index] = turn ? "x" : "0";
//     setthisstate(mycopy);
//     setturn(!turn);
//   };
//   const checkwinner = () => {
//     const winnerlogic = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ];
//     for (let z of winnerlogic) {
//       const [a, b, c] = z;
//       if (
//         thisstate[a] != null &&
//         thisstate[a] === thisstate[b] &&
//         thisstate[a] === thisstate[c]
//       ) {
//         //after comparing a with b and c it restrn a mean winner
//         return thisstate[a];
//       }
//     }
//     return false;
//   };
//   const win = checkwinner();
//   const myhandleis = () => {
//     setthisstate(Array(9).fill(null));
//   };

//   return (
//     <div>
//       <h3
//         style={{
//           marginLeft: "40px",
//           color: "green",
//           border: "4px outset ",
//           width: "250px",
//         }}
//       >
//         Tik Tak Toe 2 players Game
//       </h3>

//       <div className="board" style={{ marginTop: -6 }}>
//         {/* when the win will true then it shows winner name otherwise shows board */}
//         {win ? (
//           <>
//             ({win} win the game)<button onClick={myhandleis}>play again</button>
//           </>
//         ) : (
//           <>
//             <h2> player {turn ? "x" : "0"}</h2>
//             <div className="board-row">
//               <Square onClick={() => handlerclick(0)} value={thisstate[0]} />
//               <Square onClick={() => handlerclick(1)} value={thisstate[1]} />
//               <Square onClick={() => handlerclick(2)} value={thisstate[2]} />
//             </div>
//             <div className="board-row">
//               <Square onClick={() => handlerclick(3)} value={thisstate[3]} />
//               <Square onClick={() => handlerclick(4)} value={thisstate[4]} />
//               <Square onClick={() => handlerclick(5)} value={thisstate[5]} />
//             </div>
//             <div className="board-row">
//               <Square onClick={() => handlerclick(6)} value={thisstate[6]} />
//               <Square onClick={() => handlerclick(7)} value={thisstate[7]} />
//               <Square onClick={() => handlerclick(8)} value={thisstate[8]} />
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from 'react'
// import ReverseNumber from "./Myshape";


// function App() {
//   // for(let i=0;i<=b;i++)
//   // {
//   //   for(let j=0;j<=i;j++)
//   //   {
    
//   //   }
//   //   console.log("\n");
   
//   // }

//   return (
//     <>
//   {/* <input type="text" placeholder="Enter any number"  onChange={(e)=>{setinput(e.target.value)}} />
//   <button onclink={thisis()}>submit</button> */}
//   <ReverseNumber/>

//   </>

//   )
// }

// export default App
// import React from 'react'
// import Changinggame from '../src/Changinggame'
// import Game from '../src/Game'

// const App = () => {
//   return (
//     <div>
//       <div>
//       <Changinggame/>
//       </div>
    
  
  

//     </div>
//   )
// }

// export default App
