# React Drag and Drop Files

[![Version](http://img.shields.io/npm/v/react-drag-drop-files.svg)](https://www.npmjs.org/package/react-drag-drop-files) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![npm download][download-image]][download-url]

[download-image]: https://img.shields.io/npm/dm/react-drag-drop-files.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-drag-drop-files

Light and simple reactjs drag and drop files library to use with very flexible options to change, so you put whatever the design you want for your drop-area. Users can drag and drop or even select the file anywhere in the window.

## Demo

[![Edit react-drag-drop-files](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-drag-drop-files-sghbp)

## Installation

Install it from npm (using [NPM](http://webpack.github.io/)).

```bash
npm i --save react-drag-drop-files
```

or:

```bash
yarn add react-drag-drop-files
```

## Usage

Using react hooks just as simple as:

```jsx static
import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
  );
}

export default DragDrop;
```

## Options

| Option       | Type             | Description                                                                                                         | value example                                             |
| ------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| name         | string           | the name for your form (if exist)                                                                                   | `"myFile"`                                                |
| multiple | boolean         | a boolean to determine whether the multiple files is enabled or not                                                    | `true OR false - false by default`                             |
| label        | string           | the label (text) for your form (if exist) inside the uploading box - first word underlined                                                                                  | `"Upload or drop a file right here"`                      |
| required     | boolean          | Conditionally set the input field as required | `true` or `false`|
| disabled     | boolean          | this for disabled the input                                                                                         | `true OR false`                                           |
| hoverTitle   | string           | text appears(hover) when trying to drop a file                                                                      | `"Drop here"`                                             |
| fileOrFiles         | Array<File> or File or null     | this mainly made because if you would like to remove uploaded file(s) pass null or pass another file as initial        |
| classes      | string           | string with the classes wished to add                                                                               | `"drop_area drop_zone"`                                   |
| types        | Array<strings>   | array of strings with extensions to check and go throw                                                              | `['png', 'jpeg', ...]`                                    |
| onTypeError  | function         | function that will be called only of error occurred related to type                                                  | `(err) => console.log(err)`                               |
| children     | JSX Element, any | if you want to replace the current design inside the box of drop zone. (**it will remove the default exist style**) | `<div><p>this is inside drop area</p></div>` or just text |
| maxSize      | number           | the maximum size of the file (number in mb)                                                                         | 2                                                         |
| minSize      | number           | the minimum size of the file (number in mb)                                                                         | 1                                                         |
| onSizeError  | function         | function that will be called only if error related to min or max size occurred                                      | `(file) => console.log(file)`                             |
| onDrop       | function         | function that will be called when the user drops file(s) on the drop area only                                        | `(file) => console.log(file)`                             |
| onSelect     | function         | function that will be called when the user selects file(s) on click the file area only                                | `(file) => console.log(file)`                             |
| handleChange | function         | function that will be called when the user selects or drops file(s)                                                    | `(file) => console.log(file)`                             |
| onDraggingStateChange | function         | function that will be called with the state of dragging                                                    | `(dragging) => console.log(dragging)`                             |
| dropMessageStyle | CSS Properties         | A CSS property to style the hover message                                                    | `{backgroundColor: 'red'}`                             |

## How to contribute:
  - Please follow the instructions inside this file: [here](CONTRIBUTION.md)

### Upcoming...
- [X] Contribution Guide
- [X] Github actions

## License

[MIT](https://choosealicense.com/licenses/mit/)
