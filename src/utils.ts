/**
 * Converting the file size to MB
 * @param size : Size to be converted;
 * @returns number
 *
 * @internal
 */
export const getFileSizeMB = (size: number): number => {
  return size / 1000 / 1000;
};

/**
 * Get the files for input "accept" attribute
 * @param types - Allowed types
 * @returns string
 *
 * @internal
 */
export const accepted_ext = (types: Array<string> | undefined) => {
  if (types === undefined) return "";
  return types.map(type => `.${type.toLowerCase()}`).join(",");
};
