# Deprecation: 2023-01-27: I stopped using hexo and so this package isn't further maintained. Feel free to fork it and maintain by yourself considering the license.
# hexo-imagemin-modern for [Hexo](https://hexo.io)
> Minify images with [imagemin](https://github.com/imagemin/imagemin).

**Supported Image Formats:** gif, jpeg, png, svg

## Install
```bash
$ npm install hexo-imagemin-modern
```

No configuration is required.

### Note

- `hexo-imagemin-modern` isn't run when calling `hexo serve` as this would
  introduce significant lag into debugging. It is, however, run e.g. on
  deployment with `hexo deploy`.

## Changelog
See the [Changelog](./CHANGELOG.md) for a list of changes.

## License
    The MIT License (MIT)

    Copyright (c) 2015 Mark van Seventer, Tim Daubenschütz

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
