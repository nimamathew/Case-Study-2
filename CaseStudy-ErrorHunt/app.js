const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
//added for qn.2
const bodyParser = require('body-parser');

//commented for qn.6

// const nav= [
//     {
//         link:"/books",
//         title:"Books"
//     },
//     {
//         link:"/authors",
//         title:"Authors"
//     },
//     {
//         link:"/addbook",
//         title:"Add Book"
//     },
//     {
//         link:"/addauthor",
//         title:"Add Author"
//     }
// ]

const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homeroute');
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

//commented and added by Nima
// app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended:true}));


app.use(express.json());
// app.use(express.static(path.join(__dirname , '/public'))); 
 app.use(express.static('./public'));

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 



app.get('/',function(req,res){

    res.render('index');
    
});


app.listen(5000,()=>{
    // console.log("Server Ready on 3000");
    //code commented and added by Nima for qn.5
     console.log("Server Ready on 5000");
});