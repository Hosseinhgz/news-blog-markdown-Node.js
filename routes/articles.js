const express = require('express')
const router = express.Router()

// notice: all these pathes gonna have article/ in the begining of their path 
router.get('/new', (req,res)=>{
  res.render('articles/new')
})
router.post('/', (req,res)=>{

})

module.exports = router;
