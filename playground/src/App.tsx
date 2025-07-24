import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import './App.css';

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

const App: React.FC = () => {
  const [fileOrFiles, setFile] = useState<File | File[] | null>(null);

  const handleChange = (fileOrFiles: File | File[]): void => {
    setFile(fileOrFiles);
    console.log('changes', fileOrFiles);
  };

  const onDrop = (fileOrFiles: File | File[]): void => {
    console.log('drop', fileOrFiles);
  };

  const onSelect = (fileOrFiles: File | File[]): void => {
    console.log('test', fileOrFiles);
  };

  const onTypeError = (err: string): void => console.log(err);
  const onSizeError = (err: string): void => console.log(err);

  console.log(fileOrFiles);

  return (
    <div className="App">
      <FileUploader
        classes="sample-class"
        fileOrFiles={fileOrFiles}
        onTypeError={onTypeError}
        handleChange={handleChange}
        name="image"
        types={fileTypes}
        onSizeError={onSizeError}
        onDrop={onDrop}
        onSelect={onSelect}
        label="Upload file here"
        dropMessageStyle={{ backgroundColor: 'red' }}
        multiple
      />
      <br />
      <button onClick={() => setFile(null)}>Clear File</button>
    </div>
  );
};

export default App;
