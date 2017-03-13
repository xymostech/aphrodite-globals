# Aphrodite global styles _(aphrodite-globals)_

> A library for injecting global-scope styles
> using [Aphrodite](https://github.com/khan/aphrodite).

[Aphrodite](https://github.com/khan/aphrodite) helps you write component styles
using css-in-js techniques. However, the core library doesn't let you write
global styles needed for things like a CSS reset or to work with an existing
CSS library.

Using an [extension to Aphrodite](https://github.com/khan/aphrodite#advanced-extensions),
this module lets you easily write global styles in a way that works with
Aphrodite tooling (for example, styles rendered with this tool will correctly
work with Aphrodite's server-side rendering).

## Table of Contents

 - [Install](#install)
 - [Usage](#usage)
 - [API](#api)
 - [License](#license)

## Install

Install with `npm`:

```
npm install aphrodite-globals
```

## Usage

To use, call the exported `injectGlobalStyles` function with an object
specification of your CSS. All features in core Aphrodite are supported, like
pseudo-styles and media queries.

```js
import {injectGlobalStyles} from "aphrodite-globals";

injectGlobalStyles({
    "*": {
        boxSizing: "border-box",
    },

    "a": {
        ":hover": {
            textDecoration: "none",
        },
    },
});
```

```css
// generated CSS
* {
    box-sizing: border-box !important;
}

a:hover {
    text-decoration: none !important;
}
```

## API

 - `injectGlobalStyles`

   This function will generate styles for the passed in object of styles. Each
   of the keys of the passed in object will be used as a global selector in the
   generated styles. All of the features of Aphrodite's nested object styling
   are supported, like pseudo-styles and media queries.

 - `"aphrodite-globals/no-important"`

   By default, all of the generated styles are marked as `!important` to ensure
   that other styles on the page don't conflict with them. If this behaviour is
   not needed, `"aphrodite-globals/no-important"` can be imported instead of
   `"aphrodite-globals"` and no `!important`s will be added. This version
   exports the same API as the default version.

## License

Copyright (c) 2017 Xymostech

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
