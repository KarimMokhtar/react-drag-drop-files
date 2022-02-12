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
 *
 * Check if the file uploaded is in the type list or not
 * @param file - The File uploaded
 * @param types - Available types
 * @returns boolean
 *
 * @internal
 */
export const checkType = (file: File, types: Array<string>): boolean => {
  const extension: string = file.name.split('.').pop() as string;
  const loweredTypes = types.map((type) => type.toLowerCase());
  return loweredTypes.includes(extension.toLowerCase());
};

/**
 * Get the files for input "accept" attribute
 * @param types - Allowed types
 * @returns string
 *
 * @internal
 */
export const acceptedExt = (types: Array<string> | undefined) => {
  if (types === undefined) return '';
  return types.map((type) => `.${type.toLowerCase()}`).join(',');
};
