import { useState } from "react";

function App() {
  const [isRed, setIsRed] = useState(true);

  const toggleColor = () => {
    setIsRed(!isRed);
  };

  return (
    <div>
      <button onClick={toggleColor}>
        Change Color
      </button>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          color: "white",
          backgroundColor: isRed ? "red" : "blue"
        }}
      >
        This div changes color
      </div>
    </div>
  );
}

export default App;
