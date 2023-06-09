import React, { useState } from "react";
import Square from "./Square";

const App = () => {
  const [thisstate, setthisstate] = useState(Array(9).fill(null));
  const [turn, setturn] = useState(true);
  const handlerclick = (index) => {
    console.log("hanmd:", index);
    const mycopy = [...thisstate];
    mycopy[index] = turn ? "x" : "0";
    setthisstate(mycopy);
    setturn(!turn);
  };
  const checkwinner = () => {
    const winnerlogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let z of winnerlogic) {
      const [a, b, c] = z;
      if (
        thisstate[a] != null &&
        thisstate[a] === thisstate[b] &&
        thisstate[a] === thisstate[c]
      ) {
        //after comparing a with b and c it restrn a mean winner
        return thisstate[a];
      }
    }
    return false;
  };
  const win = checkwinner();
  const myhandleis = () => {
    setthisstate(Array(9).fill(null));
  };

  return (
    <div>
      <h3
        style={{
          marginLeft: "40px",
          color: "green",
          border: "4px outset ",
          width: "250px",
        }}
      >
        Tik Tak Toe 2 players Game
      </h3>

      <div className="board" style={{ marginTop: -6 }}>
        {/* when the win will true then it shows winner name otherwise shows board */}
        {win ? (
          <>
            ({win} win the game)<button onClick={myhandleis}>play again</button>
          </>
        ) : (
          <>
            <h2> player {turn ? "x" : "0"}</h2>
            <div className="board-row">
              <Square onClick={() => handlerclick(0)} value={thisstate[0]} />
              <Square onClick={() => handlerclick(1)} value={thisstate[1]} />
              <Square onClick={() => handlerclick(2)} value={thisstate[2]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handlerclick(3)} value={thisstate[3]} />
              <Square onClick={() => handlerclick(4)} value={thisstate[4]} />
              <Square onClick={() => handlerclick(5)} value={thisstate[5]} />
            </div>
            <div className="board-row">
              <Square onClick={() => handlerclick(6)} value={thisstate[6]} />
              <Square onClick={() => handlerclick(7)} value={thisstate[7]} />
              <Square onClick={() => handlerclick(8)} value={thisstate[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;