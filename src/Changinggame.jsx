import React, { useEffect, useState } from "react";
import Square from "./Square";

const App = () => {
  const [thisstate, setthisstate] = useState(Array(16).fill(null));
  const [turn, setturn] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [showPrompt, setShowPrompt] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // const [first, setfirst] = useState("");
  // const [Second, setSecond] = useState("");
  // const [first1, setfirst1] = useState("");
  // const [second1, setsecond1] = useState("");

  // useEffect(() => {
  //   if (showPrompt && (!player1 || !player2)) {
  //     const p1 = prompt("Enter First Player Name", "Player 1");
  //     const p2 = prompt("Enter Second Player Name", "Player 2");
  //     setPlayer1(p1);
  //     setPlayer2(p2);
  //     setShowPrompt(false);
  //   }
  // }, [showPrompt, player1, player2]);

  const handlerclick = (index) => {
   //

    if (gameOver) {
      return;
    }
    myhandle();

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

    for (let z of winnerlogic) {
      const [a, b, c, d] = z;
      if (
        thisstate[a] != null &&
        thisstate[a] === thisstate[b] &&
        thisstate[a] === thisstate[c] &&
        thisstate[a] === thisstate[d]
      ) {
        //after comparing a with b and c it restrn a mean winner

        return thisstate[a];
      }
    }

    return false;
    
  };

  const win = checkwinner();

  if ((win === "x" || win === "0") && !gameOver) {
    setGameOver(true);
  }
  console.log("hghghghgh",thisstate!=null);
 

  



  // console.log(win, "win");

  const myhandleis = () => {
    setthisstate(Array(16).fill(null));

    // var a = prompt("Enter First Player Name");
    // var b = prompt("Enter Second Player Name");
    setPlayer1(player1);
    setPlayer2(player2);
    setGameOver(false);
  };
  // const myhandle = () => {
  //   setthisstate(Array(9).fill(null));

  //   var a = prompt("Enter First Player Name");
  //   var b = prompt("Enter Second Player Name");
  //   setPlayer1(a);
  //   setPlayer2(b);
  //   setGameOver(false);
  // };
  const myhandle = () => {
    if (player1 && player2) {
      setthisstate(Array(9).fill(null));
      setGameOver(false);
    } else {
      alert("Please enter player names!");
      var a = prompt("Enter First Player Name");
      var b = prompt("Enter Second Player Name");
      setPlayer1(a);
      setPlayer2(b);
      setthisstate(Array(9).fill(null));
      setGameOver(false);
    }
  };
  const clickme = () => {
    if ((player1 && player2) == null) {
      myhandleis();
    }
  };
  const wor = () => {
    if (player1 && player2 == null) {
      setShowPrompt(true);
    }
  };
  for(let i=0;i<thisstate.length;i++)
  {
    if(thisstate[0] && thisstate[1] && thisstate[2] && thisstate[3] && thisstate[4] && thisstate[5] && thisstate[6]
      && thisstate[7] && thisstate[8] && thisstate[9] && thisstate[10] && thisstate[11] && thisstate[12] && thisstate[13]&& thisstate[14]&& thisstate[15]
       !=null)
    {
        return <h2>Draw match try again <button
        style={{
          borderRadius: "10px ",
          background: "green",
          border: "none",
          color: "white",
          height: "30px",
          marginTop: "20px",
        }}
        onClick={myhandleis}
      >
        play again
      </button> </h2>
    }
  }
  return (
    <div name="viewport" content="width=device-width, initial-scale=1.0">
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
      <button
        style={{
          marginLeft: "250px",
          borderRadius: "10px ",
          background: "green",
          border: "none",
          height: "40px",
          color: "white",
        }}
        onClick={myhandle}
      >
        {" "}
        Start Game{" "}
      </button>
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
      {
        <div className="board" style={{ marginTop: -6, marginLeft: "300px" }}>
          {/* when the win will true then it shows winner name otherwise shows board */}

          <>
            {win ? (
              <h2>{win === "x" ? player1 : player2} wins! </h2>
            ) : (
              <h2>Player {turn ? player1 : player2}'s turn</h2>
            )}

            <div className="board-row">
              <Square
                onClick={() => handlerclick(0)}
                value={thisstate[0]}
                disabled={gameOver || showPrompt}
              />
              <Square
                onClick={() => handlerclick(1)}
                value={thisstate[1]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(2)}
                value={thisstate[2]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(3)}
                value={thisstate[3]}
                disabled={gameOver}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => handlerclick(4)}
                value={thisstate[4]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(5)}
                value={thisstate[5]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(6)}
                value={thisstate[6]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(7)}
                value={thisstate[7]}
                disabled={gameOver}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => handlerclick(8)}
                value={thisstate[8]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(9)}
                value={thisstate[9]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(10)}
                value={thisstate[10]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(11)}
                value={thisstate[11]}
                disabled={gameOver}
              />
            </div>
            <div className="board-row">
              <Square
                onClick={() => handlerclick(12)}
                value={thisstate[12]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(13)}
                value={thisstate[13]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(14)}
                value={thisstate[14]}
                disabled={gameOver}
              />
              <Square
                onClick={() => handlerclick(15)}
                value={thisstate[15]}
                disabled={gameOver}
              />
            </div>
          </>

          <>
            {win && (
              <button
                style={{
                  borderRadius: "10px ",
                  background: "green",
                  border: "none",
                  color: "white",
                  height: "30px",
                  marginTop: "20px",
                }}
                onClick={myhandleis}
              >
                play again
              </button>
            )}
          </>
        </div>
      }
    </div>
  );
};

export default App;
