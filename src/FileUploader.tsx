import React, { useRef, useState, useEffect } from "react";

import DrawTypes from "./DrawTypes";
import useDragging from "./useDragging";
import ImageAdd from "./ImageAdd";
import { UploaderWrapper, DescriptionWrapper, Description, HoverMsg } from "./style";

type Props = {
  name?: string;
  types?: Array<string>;
  classes?: string;
  children?: JSX.Element;
  maxSize?: number;
  minSize?: number;
  file?: File | null;
  onSizeError?: (arg0: string) => void;
  onTypeError?: (arg0: string) => void;
  onDrop?: (arg0: File) => void;
  onSelect?: (arg0: File) => void;
  handleChange?: (arg0: File) => void;
};

const drawDecription = (currFile: File | null, uploaded: boolean, typeError: boolean) => {
  return typeError ? (
    <span>File type/size error, Hovered on types!</span>
  ) : (
    <Description>
      {!currFile && !uploaded ? (
        <>
          <span>Upload</span> or drop a file right here
        </>
      ) : (
        <>
          <span>Uploaded Successfully!.</span> Upload another?
        </>
      )}
    </Description>
  );
};

const checkType = (file: File, types: Array<string>): boolean => {
  const fileType: string = file.type.toLocaleLowerCase();
  const extensionIndex: number = fileType.lastIndexOf("/");
  const extension: string = fileType.substring(extensionIndex + 1);
  const loweredTypes = types.map(type => type.toLowerCase());
  return loweredTypes.includes(extension);
};
const getFileSizeMB = (size: number): number => {
  return size / 1000 / 1000;
};

const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    name,
    types,
    handleChange,
    classes,
    children,
    maxSize,
    minSize,
    file,
    onSizeError,
    onSelect,
    onDrop,
    onTypeError,
  } = props;
  const div = useRef<any>(null);
  const clickRef = useRef<any>(null);
  const [uploaded, setUploaded] = useState(false);
  const [currFile, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  const handleChanges = (file: File): boolean => {
    if (file) {
      if (types && !checkType(file, types)) {
        // types included and type not in them
        setError(true);
        if (onTypeError) onTypeError("File type is not supported");
        return false;
      }
      if (maxSize && getFileSizeMB(file.size) > maxSize) {
        setError(true);
        if (onSizeError) onSizeError("File size is too big");
        return false;
      }
      if (minSize && getFileSizeMB(file.size) < minSize) {
        setError(true);
        if (onSizeError) onSizeError("File size is too small");
        return false;
      }
      if (handleChange) handleChange(file);
      setFile(file);
      setUploaded(true);
      setError(false);
      return true;
    }
    return false;
  };
  const handleInputChange = (ev: any) => {
    const file = ev.target.files[0];
    const success = handleChanges(file);
    if (onSelect && success) onSelect(file);
    ev.target.value = null;
  };
  const dragging = useDragging({ div, clickRef, handleChanges, onDrop });

  useEffect(() => {
    if (file) {
      setUploaded(true);
      setFile(file);
    } else {
      setUploaded(false);
      setFile(null);
    }
  }, [file]);
  return (
    <UploaderWrapper className={classes} ref={div} htmlFor={name}>
      <input onChange={handleInputChange} ref={clickRef} type="file" name={name} />
      {dragging && (
        <HoverMsg>
          <span>Drop Here</span>
        </HoverMsg>
      )}
      {!children && (
        <>
          <ImageAdd />
          <DescriptionWrapper error={error}>
            {drawDecription(currFile, uploaded, error)}
            <DrawTypes types={types} minSize={minSize} maxSize={maxSize} />
          </DescriptionWrapper>
        </>
      )}
      {children}
    </UploaderWrapper>
  );
};
export default FileUploader;
