declare module 'react-drag-drop-files' {
  import React from 'react';

  interface FileUploaderProps {
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
  }

  const FileUploader: React.FC<FileUploaderProps>;
  export { FileUploader };
}
