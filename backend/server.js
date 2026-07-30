const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

function getBlogPosts() {
  const filePath = path.join(__dirname, 'data', 'blogPosts.json')
  const data = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(data)
}

// GET /api/posts — list all blog posts (summary view)
app.get('/api/posts', (req, res) => {
  try {
    const posts = getBlogPosts()
    const { category, limit } = req.query

    let result = posts.map(({ content, ...summary }) => summary)

    if (category) {
      result = result.filter(
        (p) => p.category.toLowerCase() === category.toLowerCase()
      )
    }

    if (limit) {
      result = result.slice(0, parseInt(limit, 10))
    }

    res.json({ posts: result, total: result.length })
  } catch {
    res.status(500).json({ error: 'Failed to load blog posts' })
  }
})

// GET /api/posts/:slug — get a single blog post by slug
app.get('/api/posts/:slug', (req, res) => {
  try {
    const posts = getBlogPosts()
    const post = posts.find((p) => p.slug === req.params.slug)
    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }
    res.json(post)
  } catch {
    res.status(500).json({ error: 'Failed to load blog post' })
  }
})

// GET /api/categories — list all available blog categories
app.get('/api/categories', (req, res) => {
  try {
    const posts = getBlogPosts()
    const categories = [...new Set(posts.map((p) => p.category))]
    res.json({ categories })
  } catch {
    res.status(500).json({ error: 'Failed to load categories' })
  }
})

app.listen(PORT, () => {
  console.log(`ParaFlux Blog API running on port ${PORT}`)
})
