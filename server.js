const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine', 'ejs');

app.use('/articles', articleRouter)
app.get('/', (req,res)=>{
  const articles = [{
    title: 'Test Article',
    createdAt: new Date(),
    description: 'test describtion'
  },{
    title: 'Second Article',
    createdAt: new Date(),
    description: 'Second Article describtion'
  }]
  res.render('index', {articles: articles})
});


app.listen(5000)