import { useState } from "react";
import { Item } from "../../types/item";
import * as C from "./styles";

type Props = {
  Item: Item;
};

export const ListItem = ({ Item }: Props) => {
  const [isCheckd, setIsCheckd] = useState(Item.done);

  return (
    <C.Container done={isCheckd}>
      <input
        type="checkbox"
        checked={isCheckd}
        onChange={(e) => setIsCheckd(e.target.checked)}
      />
      <label>{Item.name}</label>
    </C.Container>
  );
};
