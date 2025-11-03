import { useState } from "react";

function App() {
  let numero = 0;
  const [count, setCount] = useState(0);
  console.log(new Date().getTime());
  const handleClick = () => {
    numero++;
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Enviar</button>
      {new Date().getTime()}
    </div>
  );
}

export default App;
