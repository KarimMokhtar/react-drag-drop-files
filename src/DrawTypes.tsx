import React from 'react';
type Props = {
  types?: Array<string>;
  minSize?: number;
  maxSize?: number;
  disabled?: boolean | false;
};
/**
 * Draw the types and sizes restrictions for the uploading.
 * @param {Object} fileData file data types, minSize, maxSize
 * @returns JSX Element | null
 *
 * @internal
 */
export default function DrawTypes({ types, minSize, maxSize, disabled }: Props): null | JSX.Element {
  if (types) {
    const stringTypes = types.toString();
    let size = "";
    if (maxSize) size += `size >= ${maxSize}, `;
    if (minSize) size += `size <= ${minSize}, `;
    return (
      <>
        {!disabled && 
          <span title={`${size}types: ${stringTypes}`} className="file-types">
            {stringTypes}
          </span>
        }
      </>
    );
  }
  return null;
}
