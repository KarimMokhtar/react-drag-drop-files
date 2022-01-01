import { useRef, useState, useEffect } from "react";

import DrawTypes from "./DrawTypes";
import useDragging from "./useDragging";
import ImageAdd from "./ImageAdd";
import { accepted_ext, getFileSizeMB } from "./utils";
import { UploaderWrapper, DescriptionWrapper, Description, HoverMsg } from "./style";

type Props = {
  name?: string;
  hoverTitle?: string;
  types?: Array<string>;
  classes?: string;
  children?: JSX.Element;
  maxSize?: number;
  minSize?: number;
  file?: File | null;
  disabled?: boolean | false;
  label?: string | undefined;
  onSizeError?: (arg0: string) => void;
  onDrop?: (arg0: File) => void;
  onSelect?: (arg0: File) => void;
  handleChange?: (arg0: File) => void;
};
/**
 *
 * Draw a description on the frame
 * @param currFile - The uploaded file
 * @param uploaded - boolean to check if the file uploaded or not yet
 * @param typeError - boolean to check if the file has type errors
 * @param disabled - boolean to check if input is disabled
 * @param label - string to add custom label
 * @returns JSX Element
 *
 * @internal
 *
 */
const drawDescription = (
  currFile: File | null,
  uploaded: boolean,
  typeError: boolean,
  disabled: boolean | undefined,
  label: string | undefined
) => {
  return typeError ? (
    <span>File type/size error, Hovered on types!</span>
  ) : (
    <Description>
      {disabled ? (
        <span>Upload disabled</span>
      ) : !currFile && !uploaded ? (
        <>
          {label ? (
            <>
              <span>{label.split(" ")[0]}</span> {label.substr(label.indexOf(" ") + 1)}
            </>
          ) : (
            <>
              <span>Upload</span> or drop a file right here
            </>
          )}
        </>
      ) : (
        <>
          <span>Uploaded Successfully!.</span> Upload another?
        </>
      )}
    </Description>
  );
};

/**
 * File uploading main function
 * @param props - {name,
    hoverTitle,
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
    disabled,
    label}
 * @returns JSX Element
 */
const FileUploader: React.FC<Props> = (props: Props): JSX.Element => {
  const {
    name,
    hoverTitle,
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
    disabled,
    label,
  } = props;
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploaded, setUploaded] = useState(false);
  const [currFile, setFile] = useState<File | null>(null);
  const [error, setError] = useState(false);

  const handleChanges = (file: File): boolean => {
    if (file) {
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
  const dragging = useDragging({ labelRef, inputRef, handleChanges, onDrop });

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
    <UploaderWrapper
      overRide={children}
      className={`${classes || ""} ${disabled ? "is-disabled" : ""}`}
      ref={labelRef}
      htmlFor={name}>
      <input
        onChange={handleInputChange}
        accept={accepted_ext(types)}
        ref={inputRef}
        type="file"
        name={name}
        disabled={disabled}
      />
      {dragging && (
        <HoverMsg>
          <span>{hoverTitle || "Drop Here"}</span>
        </HoverMsg>
      )}
      {!children && (
        <>
          <ImageAdd />
          <DescriptionWrapper error={error}>
            {drawDescription(currFile, uploaded, error, disabled, label)}
            <DrawTypes types={types} minSize={minSize} maxSize={maxSize} />
          </DescriptionWrapper>
        </>
      )}
      {children}
    </UploaderWrapper>
  );
};
export default FileUploader;
