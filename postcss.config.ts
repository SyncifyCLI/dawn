import { env } from '@syncify/config';

const plugins = [ require('autoprefixer') ];

if (env.prod) {
  plugins.push(require('cssnano'));
}

module.exports = { plugins };
