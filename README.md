# breadcrumb-element

A simple breadcrumb element.

## Usage

```js
var breadcrumb = require('breadcrumb-element')

var element = breadcrumb([1,2,3], function (picked) {
  console.log(picked)
})

document.body.appendChild(element)
```
