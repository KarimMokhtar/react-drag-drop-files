# React Drag and drop files

Light and simple reactjs drag and drop library.

## Installation
Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save react-drag-drop-files
```


## Usage
Using react hooks just as simple as:

```jsx static
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  return (
    <FileUploader 
        file={file} 
        handleChange={handleChange} 
        name="file" 
        types={fileTypes} 
    />
  );
}

export default DragDrop;
```
### Upcoming...

- [ ] Files Validation
- [ ] Adding Multiple Files
- [ ] Testing
- [ ] Typesscript Support
- [ ] Contribution Guide
- [ ] Notify With Errors
## License
[MIT](https://choosealicense.com/licenses/mit/)