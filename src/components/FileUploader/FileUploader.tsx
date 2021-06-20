import React, { useRef, useState } from "react";

import DrawTypes from "./components/DrawTypes";
import IfComponent from "../../helpers/IfComponent/IfComponent";
import useDragging from "./components/useDragging";
import ImageAdd from "./components/ImageAdd";
import { UploaderWrapper, DescriptionWrapper, Description, HoverMsg } from "./style";

type Props = {
  name: string;
  types: Array<string>;
  handleChange: (arg0: File) => void;
};

const drawDecription = (file: File | null, uploaded: boolean, typeError: boolean) => {
  return typeError ? (
    <span>File type error, Hovered on types!</span>
  ) : (
    <Description>
      {!file && !uploaded ? (
        <>
          <span>Upload</span> or drop an image right here
        </>
      ) : (
        <>
          <span>Uploaded Successfully!.</span> Upload another?
        </>
      )}
    </Description>
  );
};

const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
  const { name, types, handleChange } = props;
  const div = useRef<any>(null);
  const clickRef = useRef<any>(null);
  const [uploaded, setUploaded] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [typeError, setTypeError] = useState(false);

  const handleChanges = (file: File) => {
    handleChange(file);
    setFile(file);
    setUploaded(true);
  };
  const handleInputChange = (ev: any) => {
    const file = ev.target.files[0];
    const fileType: string = file.type;
    const extensionIndex: number = fileType.lastIndexOf("/");
    const extension: string = fileType.substring(extensionIndex + 1);
    const loweredTypes = types.map(type => type.toLowerCase());
    
    if (!loweredTypes.includes(extension)) {
      setTypeError(true);
      return;
    }
    if (true) {
      setTypeError(false);
    }
    handleChange(file);
    setUploaded(true);
  };
  const dragging = useDragging({ div, clickRef, handleChanges });

  return (
    <UploaderWrapper ref={div} htmlFor={name}>
      <input onChange={handleInputChange} ref={clickRef} type="file" name={name} />
      <IfComponent condition={dragging}>
        <HoverMsg>
          <span>Drop Here</span>
        </HoverMsg>
      </IfComponent>
      <ImageAdd />
      <DescriptionWrapper error={typeError}>
        {drawDecription(file, uploaded, typeError)}
        <DrawTypes types={types} />
      </DescriptionWrapper>
    </UploaderWrapper>
  );
};
export default FileUploader;
