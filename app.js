const path = require('path')
const express = require('express')
const app = express()
const exphbs  = require('express-handlebars')
const port = 3000

app.use(express.static('public'))

app.engine('handlebars', exphbs())
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
  res.render('site/index')
})
app.get('/about',(req,res)=>{
  res.render('site/about')
})
app.get('/blog',(req,res)=>{
  res.render('site/blog')
})
app.get('/contact',(req,res)=>{
  res.render('site/contact')
})
app.get('/login',(req,res)=>{
  res.render('site/login')
})



app.listen(port, () => {
  console.log(`Server Çalışıyor http://localhost:${port}`)
})