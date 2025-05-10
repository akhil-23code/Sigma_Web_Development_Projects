const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
  res.send('shop home page')
})

// define the blog route
router.get('/about', (req, res) => {
  res.send('this is About my shop')
})

// define the blog route
router.get('/shop/:slug', (req, res) => {
  res.send(`fetch the shopPost for ${req.params.slug}`)
})

module.exports = router