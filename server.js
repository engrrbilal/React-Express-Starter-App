const express = require('express');
const exphbs  = require('express-handlebars');

const mongoose = require('mongoose')
const app = express();
//Map global promise - get rid of warning
mongoose.Promise = global.Promise;
//Connect to mongoose
mongoose.connect('mongodb://localhost/ideajot-dev',{
    useMongoClient:true
})
.then(()=>console.log('MongoDB connected...'))
.catch(err =>console.log("Error mongoDB",err))
//Load Idea Model
require('./models/Idea');
const Idea = mongoose.model('ideas');

//Handlebars Middlewares
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.get('/',(req,res) =>{
    // res.send('Index')
    const title = "welcome"
    res.render('index',{
        title:title
    })
})
app.get('/customers',(req,res) =>{
    const customers = [
        {id:1,firstName:'Muhammad',lastName:'Bilal'},
        {id:2,firstName:'Shoaib',lastName:'Alladeen'},
        {id:3,firstName:'Nafil',lastName:'ahmed'},
    ];
    res.json(customers)
})
app.get('/about',(req,res) =>{
    const about = [
        {place:'Mianwali'},{place:'Karachi'},{place:'Lahore'}
    ];
    res.render('about')
    // res.json(about)
})

const port = 5000;

app.listen(port,()=> console.log(`Server started on port ${port}`))