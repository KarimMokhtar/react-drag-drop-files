import {
  Description,
  DescriptionWrapper,
  HoverMsg,
  UploaderWrapper
} from './style';
import { acceptedExt, checkType, getFileSizeMB } from './utils';
import React, { useEffect, useRef, useState } from 'react';

import DrawTypes from './DrawTypes';
import ImageAdd from './ImageAdd';
import useDragging from './useDragging';

type Props = {
  name?: string;
  hoverTitle?: string;
  types?: Array<string>;
  classes?: string;
  children?: JSX.Element;
  maxSize?: number;
  minSize?: number;
  fileOrFiles?: Array<File> | File | null;
  disabled?: boolean | false;
  label?: string | undefined;
  uploadedLabel?: string | undefined;
  multiple?: boolean | false;
  required?: boolean | false;
  onSizeError?: (arg0: string) => void;
  onTypeError?: (arg0: string) => void;
  onDrop?: (arg0: File | Array<File>) => void;
  onSelect?: (arg0: File | Array<File>) => void;
  handleChange?: (arg0: File | Array<File> | File) => void;
  onDraggingStateChange?: (dragging: boolean) => void;
  dropMessageStyle?: React.CSSProperties | undefined;
  ariaLabel?: string | undefined;
  ariaDescribedby?: string | undefined;
};
/**
 *
 * Draw a description on the frame
 * @param currFile - The uploaded file
 * @param uploaded - boolean to check if the file uploaded or not yet
 * @param typeError - boolean to check if the file has type errors
 * @param disabled - boolean to check if input is disabled
 * @param label - string to add custom label
 * @param uploadedLabel - string to add custom label when a file was uploaded
 * @returns JSX Element
 *
 * @internal
 *
 */
const drawDescription = (
  currFile: Array<File> | File | null,
  uploaded: boolean,
  typeError: boolean,
  disabled: boolean | undefined,
  label: string | undefined,
  uploadedLabel: string | undefined
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
              <span>{label.split(' ')[0]}</span>{' '}
              {label.substr(label.indexOf(' ') + 1)}
            </>
          ) : (
            <>
              <span>Upload</span> or drop a file right here
            </>
          )}
        </>
      ) : (
        <>
          {uploadedLabel ? (
            <>
              <span>{uploadedLabel}</span>
            </>
          ) : (
            <>
              <span>Uploaded Successfully!</span> Upload another?
            </>
          )}
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
 fileOrFiles,
 onSizeError,
 onTypeError,
 onSelect,
 onDrop,
 onTypeError,
 disabled,
 label,
 multiple,
 required,
 onDraggingStateChange
 }
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
    fileOrFiles,
    onSizeError,
    onTypeError,
    onSelect,
    onDrop,
    disabled,
    label,
    uploadedLabel,
    multiple,
    required,
    onDraggingStateChange,
    dropMessageStyle,
    ariaLabel,
    ariaDescribedby
  } = props;
  const labelRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploaded, setUploaded] = useState(false);
  const [currFiles, setFile] = useState<Array<File> | File | null>(null);
  const [error, setError] = useState(false);

  const validateFile = (file: File) => {
    if (types && !checkType(file, types)) {
      // types included and type not in them
      setError(true);
      if (onTypeError) onTypeError('File type is not supported');
      return false;
    }
    if (maxSize && getFileSizeMB(file.size) > maxSize) {
      setError(true);
      if (onSizeError) onSizeError('File size is too big');
      return false;
    }
    if (minSize && getFileSizeMB(file.size) < minSize) {
      setError(true);
      if (onSizeError) onSizeError('File size is too small');
      return false;
    }
    return true;
  };

  const handleChanges = (files: File | Array<File>): boolean => {
    let checkError = false;
    if (files) {
      if (files instanceof File) {
        checkError = !validateFile(files);
      } else {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          checkError = !validateFile(file) || checkError;
        }
      }
      if (checkError) return false;
      if (handleChange) handleChange(files);
      setFile(files);

      setUploaded(true);
      setError(false);
      return true;
    }
    return false;
  };

  const blockEvent = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
  };
  const handleClick = (ev: any) => {
    ev.stopPropagation();
    // eslint-disable-next-line no-param-reassign
    if (inputRef && inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const handleInputChange = (ev: any) => {
    const allFiles = ev.target.files;
    const files = multiple ? allFiles : allFiles[0];
    const success = handleChanges(files);
    if (onSelect && success) onSelect(files);
  };
  const dragging = useDragging({
    labelRef,
    inputRef,
    multiple,
    handleChanges,
    onDrop
  });

  useEffect(() => {
    onDraggingStateChange?.(dragging);
  }, [dragging]);

  useEffect(() => {
    if (fileOrFiles) {
      setUploaded(true);
      setFile(fileOrFiles);
    } else {
      if (inputRef.current) inputRef.current.value = '';
      setUploaded(false);
      setFile(null);
    }
  }, [fileOrFiles]);

  return (
    <UploaderWrapper
      override={children}
      className={`${classes || ''} ${disabled ? 'is-disabled' : ''}`}
      ref={labelRef}
      htmlFor={name}
      onClick={blockEvent}
      aria-describedby={ariaDescribedby}
      role="button"
      aria-label={ariaLabel}
    >
      <input
        onClick={handleClick}
        onChange={handleInputChange}
        accept={acceptedExt(types)}
        ref={inputRef}
        type="file"
        id={name}
        name={name}
        disabled={disabled}
        multiple={multiple}
        required={required}
      />
      {dragging && (
        <HoverMsg style={dropMessageStyle}>
          <span>{hoverTitle || 'Drop Here'}</span>
        </HoverMsg>
      )}
      {!children && (
        <>
          <ImageAdd />
          <DescriptionWrapper error={error}>
            {drawDescription(
              currFiles,
              uploaded,
              error,
              disabled,
              label,
              uploadedLabel
            )}
            <DrawTypes types={types} minSize={minSize} maxSize={maxSize} />
          </DescriptionWrapper>
        </>
      )}
      {children}
    </UploaderWrapper>
  );
};
export default FileUploader;
