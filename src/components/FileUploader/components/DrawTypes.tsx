import React from "react";
type Props = {
  types: Array<string>;
};
const DrawTypes = ({ types }: Props) => (
  <span>
    {types.map((type, index) => {
      if (index === 0) return type;
      if (index === types.length - 1) return `, or ${type}`;
      return `, ${type}`;
    })}
  </span>
);
export default DrawTypes;
