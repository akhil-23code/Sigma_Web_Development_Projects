const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('blog home page')
})

// define the blog route
router.get('/about', (req, res) => {
  res.send('About blog')
})

// define the blog route
router.get('/blog/:slug', (req, res) => {
  res.send(`fetch the blogpost for ${req.params.slug}`)
})

module.exports = router