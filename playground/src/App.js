import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./App.css";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function App() {
  const [fileOrFiles, setFile] = useState(null);
  const handleChange = fileOrFiles => {
    setFile(fileOrFiles);
    console.log("changes", fileOrFiles);
  };
  const onDrop = (fileOrFiles) => {
    console.log("drop", fileOrFiles);
  };
  const onSelect = (fileOrFiles) => {
    console.log("test", fileOrFiles);
  };

  const onTypeError = (err = 1) => console.log(err);
  const onSizeError = (err = 1) => console.log(err);
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
        multiple
      />
      <br />
      <button onClick={() => setFile(null)}>Clear File</button>
    </div>
  );
}

export default App;
