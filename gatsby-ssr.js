const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('script', {
      key: 'theme-init',
      dangerouslySetInnerHTML: {
        __html: `
          (function() {
            try {
              var theme = localStorage.getItem('theme') || 'light';
              var accent = localStorage.getItem('accent') || 'blue';
              document.documentElement.setAttribute('data-theme', theme);
              document.documentElement.setAttribute('data-accent', accent);
            } catch(e) {}
          })();
        `,
      },
    }),
  ])
}
