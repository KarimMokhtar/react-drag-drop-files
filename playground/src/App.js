import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import "./App.css";
const fileTypes = ["JPG", "PNG", "GIF", "JPEG"];

function App() {
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
    console.log("changes", file);
  };
  const onDrop = (file) => {
    console.log("drop", file);
  };
  const onSelect = (file) => {
    console.log("test", file);
  };

  const onTypeError = (err = 1) => console.log(err);
  const onSizeError = (err = 1) => console.log(err);
  console.log(file);
  return (
    <div className="App">
      <FileUploader
        classes="sample-class"
        fileOrFiles={file}
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
