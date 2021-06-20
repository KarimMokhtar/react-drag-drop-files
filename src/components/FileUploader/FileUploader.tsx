import React, { useRef, useState } from "react";

import DrawTypes from "./components/DrawTypes";
import IfComponent from "../../helpers/IfComponent/IfComponent";
import useDragging from "./components/useDragging";
import ImageAdd from "./components/ImageAdd";
import { UploaderWrapper, DescriptionWrapper, Description, HoverMsg } from "./style";



type Props = {
  name: string;
  types: Array<string>;
  handleChange: (arg0: FileList | null) => void;
  file: File | null;
};

const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
  const { name, types, file, handleChange } = props;
  const div = useRef<any>(null);
  const clickRef = useRef<any>(null);
  const [uploaded, setUploaded] = useState(false);
  const dragging = useDragging({ div, clickRef, setUploaded, handleChange });

  return (
    <UploaderWrapper ref={div} htmlFor={name}>
      <input
        onChange={ev => {
          handleChange(ev.target.files);
          setUploaded(true);
        }}
        ref={clickRef}
        type="file"
        name={name}
      />
      <IfComponent condition={dragging}>
        <HoverMsg>
          <span>Drop Here</span>
        </HoverMsg>
      </IfComponent>
      <ImageAdd />
      <DescriptionWrapper>
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
        <DrawTypes types={types} />
      </DescriptionWrapper>
    </UploaderWrapper>
  );
};
export default FileUploader;
