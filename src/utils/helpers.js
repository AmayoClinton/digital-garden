export function formatDate(dateString, options = {}) {
  const date = new Date(dateString)
  const defaults = { year: 'numeric', month: 'long', day: 'numeric' }
  return date.toLocaleDateString('en-US', { ...defaults, ...options })
}

export function formatDateShort(dateString) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric' })
}

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function groupByYear(posts) {
  return posts.reduce((acc, post) => {
    const year = new Date(post.frontmatter.date).getFullYear()
    if (!acc[year]) acc[year] = []
    acc[year].push(post)
    return acc
  }, {})
}
