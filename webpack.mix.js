const mix = require('laravel-mix');

mix.js('src/main.jsx', 'dist')
  .react()
  .postCss("src/index.css", "dist", [
     require("tailwindcss"),
  ])
  .browserSync({
    proxy: false,
    server: {
      baseDir: './'
    },
    files: [
      'dist/**/*',
      'index.html',
    ]
  })
  .webpackConfig({
    resolve: {
      fallback: {
        stream: require.resolve("stream-browserify"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser")
      },
    },
  });