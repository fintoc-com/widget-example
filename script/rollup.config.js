export default {
  input: 'src/main.js',
  output: {
    dir: 'dist',
    format: 'iife',
    globals: {
      '$document': 'document',
      '$window': 'window',
    },
  },
  external: ['$document', '$window'],
}
