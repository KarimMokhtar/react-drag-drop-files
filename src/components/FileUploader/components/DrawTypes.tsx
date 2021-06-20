import React from "react";
type Props = {
  types: Array<string>;
};
const DrawTypes = ({ types }: Props) => {
  const stringTypes = types.toString();
  return (
    <span title={`It must be one of: ${stringTypes}`} className="file-types">
      {stringTypes}
    </span>
  );
};
export default DrawTypes;
