// purgecss.config.js

module.exports = {
  // These are the files that Purgecss will search through
  content: ['_site/**/*.html', '_site/**/*.js'],
  css: ['_site/**/*.css'],
  extractors: [
    {
      extractor: function extractor(content) {
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
      },
      extensions: ['html', 'js']
    }
  ],
  safelist: {
    standard: ['tooltip', 'bs-tooltip-bottom', 'bs-tooltip-top', 'bs-tooltip-left', 'bs-tooltip-right'],
  },
};
