// Import PrismJS theme for code blocks
require('prismjs/themes/prism-tomorrow.css')

// Apply saved theme and accent before paint
exports.onClientEntry = () => {
  try {
    const theme = localStorage.getItem('theme') || 'light'
    const accent = localStorage.getItem('accent') || 'blue'
    document.documentElement.setAttribute('data-theme', theme)
    document.documentElement.setAttribute('data-accent', accent)
  } catch (e) {}
}
