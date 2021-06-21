import React from "react";
type Props = {
  types?: Array<string>;
  minSize?: number;
  maxSize?: number;
};
const DrawTypes = ({ types, minSize, maxSize }: Props) => {
  if (types) {
    const stringTypes = types.toString();
    let size = "";
    if (maxSize) size += `size >= ${maxSize}, `;
    if (minSize) size += `size <= ${minSize}, `;
    return (
      <span title={`${size}types: ${stringTypes}`} className="file-types">
        {stringTypes}
      </span>
    );
  }
  return null;
};
export default DrawTypes;
