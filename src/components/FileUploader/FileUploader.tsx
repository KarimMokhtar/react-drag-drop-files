import React, { ReactNode, useRef, useState } from "react";

import DrawTypes from "./components/DrawTypes";
import IfComponent from "../../helpers/IfComponent/IfComponent";
import useDragging from "./components/useDragging";
import ImageAdd from "./components/ImageAdd";
import { UploaderWrapper, DescriptionWrapper, Description, HoverMsg } from "./style";

type Props = {
  name: string;
  types?: Array<string>;
  classes?: string;
  children?: JSX.Element;
  maxSize?: number;
  minSize?: number;
  handleChange: (arg0: File) => void;
};

const drawDecription = (file: File | null, uploaded: boolean, typeError: boolean) => {
  return typeError ? (
    <span>File type/size error, Hovered on types!</span>
  ) : (
    <Description>
      {!file && !uploaded ? (
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
  return size / 1024 / 1024;
};

const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
  const { name, types, handleChange, classes, children, maxSize, minSize } = props;
  const div = useRef<any>(null);
  const clickRef = useRef<any>(null);
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  const handleChanges = (file: File) => {
    if (file) {
      if (types && !checkType(file, types)) {
        // types included and type not in them
        setError(true);
        return;
      }
      if (maxSize && getFileSizeMB(file.size) > maxSize) {
        setError(true);
        return;
      }
      if (minSize && getFileSizeMB(file.size) < minSize) {
        setError(true);
        return;
      }
      handleChange(file);
      setFile(file);
      setUploaded(true);
      setError(false);
    }
  };
  const handleInputChange = (ev: any) => {
    handleChanges(ev.target.files[0]);
  };
  const dragging = useDragging({ div, clickRef, handleChanges });

  return (
    <UploaderWrapper className={classes} ref={div} htmlFor={name}>
      <input onChange={handleInputChange} ref={clickRef} type="file" name={name} />
      <IfComponent condition={dragging}>
        <HoverMsg>
          <span>Drop Here</span>
        </HoverMsg>
      </IfComponent>
      <IfComponent condition={!children}>
        <ImageAdd />
        <DescriptionWrapper error={error}>
          {drawDecription(file, uploaded, error)}
          <DrawTypes types={types} minSize={minSize} maxSize={maxSize} />
        </DescriptionWrapper>
      </IfComponent>
      {children}
    </UploaderWrapper>
  );
};
export default FileUploader;
