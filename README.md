# garden.cerdenia.com

A bare-bones markdown-based static site powered by a poor man's static site generator, meant to be a "digital garden" of sorts.

Served at [garden.cerdenia.com](https://garden.cerdenia.com) (deployed with Vercel).

To run locally, after cloning, install dependencies and run the development server:

```
npm i
npm run dev
```

When building, the sites's files are generated in the `public` folder. To build, run the build command:

```
npm run build
```

Then use a static file server like `serve` to serve the generated files:

```
npm i -g serve
serve public
```

## Frameworks/Libraries

- [Express](https://expressjs.com/) development server to build individual pages on demand paired with `nodemon`
- [Bootstrap](https://getbootstrap.com/) CSS and icons
- [`gray-matter`](https://www.npmjs.com/package/gray-matter) for parsing YAML front matter
- [`markdown-it`](https://www.npmjs.com/package/markdown-it) for parsing markdown to HTML
- [`html-minifier`](https://www.npmjs.com/package/html-minifier) for minifying HTML output