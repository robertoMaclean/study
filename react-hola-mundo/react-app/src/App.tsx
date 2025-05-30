import { useState } from "react";
import Button from "./components/Button";
import Card, { CardBody } from "./components/Card";
import List from "./components/List";

function App() {
  const [isLoadingAdd, setIsLoadingAdd] = useState(false);
  const [isLoadingRemove, setIsLoadingRemove] = useState(false);
  const [list, setList] = useState(["Goku", "Tajiro", "Chanchito feliz"]);
  let selectedItem: string;
  const handleClickAdd = () => {
    // setIsLoadingAdd(!isLoadingAdd);
    setList([...list, "Minion"]);
    // setIsLoadingAdd(!isLoadingAdd);
  };
  const handleClickRemove = () => {
    console.log("imprimiendo elemento", selectedItem);
    // setIsLoadingRemove(!isLoadingRemove);
    setList(list.slice(0, -1));
    // setIsLoadingRemove(!isLoadingRemove);
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
      <Button isLoading={isLoadingAdd} onClick={handleClickAdd}>
        Agregar
      </Button>
      <Button isLoading={isLoadingRemove} onClick={handleClickRemove}>
        Eliminar
      </Button>
      {contenido}
      {/* <Button isLoading={isLoading} onClick={handleClick}> */}
      {/*   Hola Mundo */}
      {/* </Button> */}
    </Card>
  );
}

export default App;
