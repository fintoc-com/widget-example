export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/main.iife.js',
      format: 'iife',
      name: 'WidgetExample',
    },
  },
  {
    input: 'src/main.js',
    output: {
      file: 'dist/main.es.js',
      format: 'es',
    },
  },
];
