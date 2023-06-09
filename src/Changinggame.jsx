import React, { useEffect, useState } from "react";
import Square from "./Square";

const App = () => {
  const [thisstate, setthisstate] = useState(Array(9).fill(null));
  const [turn, setturn] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  // const [first, setfirst] = useState("");
  // const [Second, setSecond] = useState("");
  // const [first1, setfirst1] = useState("");
  // const [second1, setsecond1] = useState("");

  useEffect(() => {
    if (showPrompt && (!player1 || !player2)) {
      const p1 = prompt("Enter First Player Name", "Player 1");
      const p2 = prompt("Enter Second Player Name", "Player 2");
      setPlayer1(p1);
      setPlayer2(p2);
      setShowPrompt(false);
    }
  }, [showPrompt,player1,player2]);

  const handlerclick = (index) => {
    if (gameOver) {
console.log(gameOver,"vjadgsjhgjhg");
      // return;
    }
    console.log("hanmd:", index);
    const mycopy = [...thisstate];
    mycopy[index] = turn ? "x" : "0";
    setthisstate(mycopy);
    setturn(!turn);
  };

  // const firsthandler = () => {
  //   setfirst1(z);
  // };
  // const secondhandler = () => {
  //   setsecond1(y);
  // };
  const checkwinner = () => {
    const winnerlogic = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [8, 9, 10, 11],
      [12, 13, 14, 15],
      [0, 4, 8, 12],
      [1, 5, 9, 13],
      [2, 6, 10, 14],
      [3, 7, 11, 15],
      [0, 5, 10, 15],
      [3, 6, 9, 12],
    ];
console.log(thisstate);
    for (let z of winnerlogic) {
      const [a, b, c, d] = z;
      if (
        thisstate[a] != null &&
        thisstate[a] === thisstate[b] &&
        thisstate[a] === thisstate[c] &&
        thisstate[a] === thisstate[d]
      ) {
        //after comparing a with b and c it restrn a mean winner
        // setGameOver(true);
        return thisstate[a];
      }
    }
    return false;
  };
  const win = checkwinner();
  console.log(win,"win");
  const checkwin=()=>
  {
    if(win=='x' || '0')
    {
        setGameOver(true)
    }
  }
  const myhandleis = () => {
    setthisstate(Array(9).fill(null));
  };

  return (
    <div>
      <h3
        style={{
          marginLeft: "250px",
          color: "green",
          border: "4px outset ",
          width: "250px",
        }}
      >
        Tik Tak Toe 2 players Game
      </h3>
      {/* <div style={{marginLeft:"80px"}}>
      <input
        type="text"
        placeholder="Enter first player Name"
        onChange={(e) => setfirst(e.target.value)}
      />
      <button onClick={firsthandler}>Enter</button> <h3>Player is :{first1}</h3>
      <br />
      <input
        type="text"  style={{marginTop:-19}}
        placeholder="Enter Second player Name"
        onChange={(e) => setSecond(e.target.value)}
      />
      <button onClick={secondhandler}>Enter</button>
      <h3>Player is :{second1}</h3>
      </div> */}
      <div className="board" onClick={checkwin} disabled={gameOver} style={{ marginTop: -6, marginLeft: "300px" }}>
        {/* when the win will true then it shows winner name otherwise shows board */}

        <>
        {win ? (
    <h2>{win === 'x' ? player1 : player2} wins! </h2>
  ) : (
    <h2>Player {turn ? player1 : player2}'s turn</h2>
  )}

          <div className="board-row" >
            <Square onClick={() => handlerclick(0)} value={thisstate[0]}  disabled={gameOver} />
            <Square onClick={() => handlerclick(1)} value={thisstate[1]}   />
            <Square onClick={() => handlerclick(2)} value={thisstate[2]} />
            <Square onClick={() => handlerclick(3)} value={thisstate[3]}/>
          </div>
          <div className="board-row">
            <Square onClick={() => handlerclick(4)} value={thisstate[4]}  />
            <Square onClick={() => handlerclick(5)} value={thisstate[5]}  />
            <Square onClick={() => handlerclick(6)} value={thisstate[6]} />
            <Square onClick={() => handlerclick(7)} value={thisstate[7]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handlerclick(8)} value={thisstate[8]} />
            <Square onClick={() => handlerclick(9)} value={thisstate[9]} />
            <Square onClick={() => handlerclick(10)} value={thisstate[10]} />
            <Square onClick={() => handlerclick(11)} value={thisstate[11]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handlerclick(12)} value={thisstate[12]} />
            <Square onClick={() => handlerclick(13)} value={thisstate[13]} />
            <Square onClick={() => handlerclick(14)} value={thisstate[14]} />
            <Square onClick={() => handlerclick(15)} value={thisstate[15]} />
          </div>
        </>

        <>
        
          <button onClick={myhandleis}>play again</button>
        </>
      </div>
    </div>
  );
};

export default App;
