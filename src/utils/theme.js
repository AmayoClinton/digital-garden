export function getTheme() {
  try {
    return localStorage.getItem('theme') || 'light'
  } catch {
    return 'light'
  }
}

export function setTheme(theme) {
  try {
    localStorage.setItem('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  } catch {}
}

export function getAccent() {
  try {
    return localStorage.getItem('accent') || 'blue'
  } catch {
    return 'blue'
  }
}

export function setAccent(accent) {
  try {
    localStorage.setItem('accent', accent)
    document.documentElement.setAttribute('data-accent', accent)
  } catch {}
}
