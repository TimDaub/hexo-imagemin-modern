/**
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Mark van Seventer, Tim Daubenschütz
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 **/

const imagemin = require("imagemin");
const imageminGifsicle = require("imagemin-gifsicle");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminOptipng = require("imagemin-optipng");
const imageminSvgo = require("imagemin-svgo");
const imageminPngquant = require("imagemin-pngquant");
const pkg = require("../package.json");
const { name } = pkg;

module.exports = async function() {
  const hexo = this;
  if (hexo.env.cmd == "serve") {
    hexo.log.info(`${name}: Skipping image optimization task for 'serve' command. Use 'deploy' instead.`);
    return;
  }

  hexo.log.info(`${name}: Start optimizing images for the web`);
  const dir = this.source.context.source_dir;
  const selector = `${dir}**/*.{gif,jpg,png,svg}`;
  const files = await imagemin([selector], {
    plugins: [
      imageminGifsicle({
        interlaced: false
      }),
      imageminJpegtran({
        progressive: false
      }),
      imageminMozjpeg({
        progressive: false
      }),
      imageminOptipng({
        optimizationLevel: 3
      }),
      imageminSvgo(),
      imageminPngquant()
    ]
  });

  hexo.log.info(`${name}: Writing optimized images`);
  for (let file of files) {
    this.route.set(file.sourcePath, file.data);
  }
};
