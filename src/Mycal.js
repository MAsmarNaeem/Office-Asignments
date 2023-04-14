import { useState } from "react";

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const value = e.target.value;
    console.log("value is :", value);

    setInput(input.concat(value));
  };

  const handleClear = () => {
    setInput("");
  };
  const handleEquals = () => {
    try {
      let result;
      let expression = input.split(/(\+|\-|\*|\/)/g);

      for (let i = 1; i < expression.length; i += 2) {
        if (expression[i] === "*" || expression[i] === "/") {
          let operator = expression[i];
          let leftOperand = parseFloat(expression[i - 1]);

          let rightOperand = parseFloat(expression[i + 1]);
          let Result;
          if (operator === "*") {
            Result = leftOperand * rightOperand;
          } else if (operator === "/") {
            Result = leftOperand / rightOperand;
          }
          expression.splice(i - 1, 3, Result.toString());
        }
      }
      let myresult = 0;
      for (let i = 1; i < expression.length; i += 2) {
        if (expression[i] === "+" || expression[i] === "-") {
          let operator = expression[i];
          let leftOperand = parseFloat(expression[i - 1]);

          let rightOperand = parseFloat(expression[i + 1]);
          let Result;

          if (operator === "+") {
            Result = leftOperand + rightOperand;
          } else if (operator === "-") {
            Result = leftOperand - rightOperand;
          }
          expression.splice(i - 1, 3, Result.toString());
        }
      }
      result = parseFloat(expression[0]);

      setInput(result.toString());
    } catch (error) {
      setInput("error");
    }
  };

  return (
    <div>
      <input type="text" value={input} readOnly style={{ textAlign: "end" }} />
      <br />
      <button value="1" onClick={handleInput}>
        1
      </button>
      <button value="2" onClick={handleInput}>
        2
      </button>
      <button value="3" onClick={handleInput}>
        3
      </button>
      <button value="+" onClick={handleInput}>
        +
      </button>
      <br />
      <button value="4" onClick={handleInput}>
        4
      </button>
      <button value="5" onClick={handleInput}>
        5
      </button>
      <button value="6" onClick={handleInput}>
        6
      </button>
      <button value="-" onClick={handleInput}>
        -
      </button>
      <br />
      <button value="7" onClick={handleInput}>
        7
      </button>
      <button value="8" onClick={handleInput}>
        8
      </button>
      <button value="9" onClick={handleInput}>
        9
      </button>

      <br />
      <button value="0" onClick={handleInput}>
        0
      </button>

      <button value="/" onClick={handleInput}>
        /
      </button>
      <button value="*" onClick={handleInput}>
        X
      </button>
      <button onClick={handleClear}>C</button>
      <br />
      <button onClick={handleEquals}>=</button>
    </div>
  );
}

export default Calculator;
