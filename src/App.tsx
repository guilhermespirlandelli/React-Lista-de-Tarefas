import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/Listitem";
import { Item } from "./types/item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: "Tarefa Guilherme número 1",
      done: true,
    },
    {
      id: 2,
      name: "Terminar este projeto",
      done: false,
    },
    {
      id: 3,
      name: "Testando o map",
      done: false,
    },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header> LISTA DE TAREFAS </C.Header>

        {/* Add nova tarefa */}

        <AddArea onEnter={handleAddTask} />

        {/* Lista de tarefas */}

        {list.map((item, index) => (
          <ListItem key={index} Item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
