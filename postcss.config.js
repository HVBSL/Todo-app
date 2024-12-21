const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        tailwindcss(require.resolve('./tailwind.config.js')),
        autoprefixer
    ],
};