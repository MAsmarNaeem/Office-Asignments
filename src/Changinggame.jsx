import React, { useState, useEffect } from "react";
import Square from "./Square";

const App = () => {
  const [thisstate, setthisstate] = useState(Array(16).fill(null));
  const [turn, setturn] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  const [gameOver, setGameOver] = useState(false);
  const [start, setstart] = useState(true);
  const [time, setTime] = useState(0);

  //
  useEffect(() => {
    let interval;
    if (!gameOver && !start) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    }

    if (time >= 15) {
      setturn(!turn);
      setTime(0);
    }

    return () => clearInterval(interval);
  }, [gameOver, start, time, turn]);

  const handlerclick = (index) => {
    //
    if (start) {
      return alert("Click on Start Button");
    }
    if (gameOver) {
      return;
    }
    myhandle();
    setTime(0);
    const mycopy = [...thisstate];

    if (mycopy[index] === null) {
      // check if value is already set
      mycopy[index] = turn ? "x" : "0";
      setthisstate(mycopy);
      setturn(!turn);
    } else if (mycopy[index] !== null) {
      setthisstate(mycopy);
    }
  };

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

  const myhandleis = () => {
    setthisstate(Array(16).fill(null));

    if (win === "x") {
      setPlayer1(player1);
      setPlayer2(player2);
      setturn(true);
    } else if (win === "0") {
      setPlayer1(player1);
      setPlayer2(player2);
      setturn(false);
    }
    setGameOver(false);
  };

  const myhandle = () => {
    setstart(false);
    if (player1 && player2) {
      setthisstate(Array(16).fill(null));
      setGameOver(false);
    } else {
      alert("Please enter player names!");
      var a = prompt("Enter First Player Name");
      var b = prompt("Enter Second Player Name");
      setPlayer1(a);
      setPlayer2(b);
      setthisstate(Array(16).fill(null));
      setGameOver(false);
    }
  };

  const my = () => {
    for (let i = 0; i < thisstate.length; i++) {
      if (
        thisstate[0] &&
        thisstate[1] &&
        thisstate[2] &&
        thisstate[3] &&
        thisstate[4] &&
        thisstate[5] &&
        thisstate[6] &&
        thisstate[7] &&
        thisstate[8] &&
        thisstate[9] &&
        thisstate[10] &&
        thisstate[11] &&
        thisstate[12] &&
        thisstate[13] &&
        thisstate[14] &&
        thisstate[15] != null
      ) {
        return (
          <h2>
            Draw match try again{" "}
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
            </button>{" "}
          </h2>
        );
      }
    }
  };
  const how = () => {
    setstart(true);
  };
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
      <button
        style={{
          marginLeft: "50px",
          borderRadius: "10px ",
          background: "green",
          border: "none",
          height: "40px",
          color: "white",
        }}
        //  onClick={how}
      >
        {" "}
        Timer {time}{" "}
      </button>

      {
        <div className="board" style={{ marginTop: -6, marginLeft: "300px" }}>
          {/* when the win will true then it shows winner name otherwise shows board */}

          <>
            {win ? (
              <h2>{win === "x" ? player1 : player2} wins! </h2>
            ) : (
              <h4>Player {turn ? player1 : player2}'s turn</h4>
            )}

            <div className="board-row">
              <Square
                onClick={() => handlerclick(0)}
                value={thisstate[0]}
                disabled={gameOver}
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
            {win !== "x" && win !== "0" ? my() : ""}

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
