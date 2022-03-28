const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
 const PORT = process.env.PORT || 8080
//istek logları
 app.use(morgan('tiny'));
 connectDB();
//bodyparser
app.use(bodyparser.urlencoded({extended: true}));


app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs"))

app.use('/css',express.static(path.resolve(__dirname,"assets/css")));
app.use('/img',express.static(path.resolve(__dirname,"assets/img")));
app.use('/js',express.static(path.resolve(__dirname,"assets/js")));

app.use('/', require('./server/routes/router'));

app.listen(PORT,() =>  {console.log(`Server İs Runnng ${PORT}`)});  