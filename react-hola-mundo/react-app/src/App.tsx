import { useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import List from "./components/List";

function App() {
  // const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  // const [isLoadingRemove, setIsLoadingRemove] = useState(false);
  const [list, setList] = useState(["Goku", "Tajiro", "Chanchito feliz"]);
  let selectedItem: string;
  const handleClickAdd = () => {
    setList([...list, "Minion"]);
  };
  const handleClickRemove = () => {
    console.log("imprimiendo elemento", selectedItem);
    setList(list.slice(0, -1));
  };
  const handleSelect = (elemento: string) => {
    console.log("imprimiendo", elemento);
    selectedItem = elemento;
  };

  const contenido = list.length !== 0 && (
    <List data={list} onSelect={handleSelect} />
  );

  return (
    <Card>
      {/* <CardBody title="Hola Mundo" text="Este es el texto" /> */}
      <Button onClick={handleClickAdd}>Agregar</Button>
      <Button onClick={handleClickRemove}>Eliminar</Button>
      {contenido}
      {/* <Button isLoading={isLoading} onClick={handleClick}> */}
      {/*   Hola Mundo */}
      {/* </Button> */}
    </Card>
  );
}

export default App;
