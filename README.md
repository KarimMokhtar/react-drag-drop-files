# React Drag and drop files


[![Version](http://img.shields.io/npm/v/react-drag-drop-files.svg)](https://www.npmjs.org/package/react-drag-drop-files) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![npm download][download-image]][download-url] 

[download-image]: https://img.shields.io/npm/dm/react-drag-drop-files.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-drag-drop-files


Light and simple reactjs drag and drop library.


## Demo

[![Edit react-drag-drop-files](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-drag-drop-files-sghbp)
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
        handleChange={handleChange} 
        name="file" 
        types={fileTypes} 
    />
  );
}

export default DragDrop;
```
### Upcoming...

- [x] Files Validation
- [ ] Adding Multiple Files
- [ ] Testing
- [x] Typesscript Support
- [ ] Contribution Guide
- [ ] Notify With Errors
## License
[MIT](https://choosealicense.com/licenses/mit/)