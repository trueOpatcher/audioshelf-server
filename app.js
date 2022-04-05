const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://Maxx:w290982w@cluster0.fnxqo.mongodb.net/audioshelf?retryWrites=true&w=majority';

const authRoutes = require('./routes/auth');
const audioRoutes = require('./routes/audio');
const audiostoreRoutes = require('./routes/audiostore');

const options = {
    root: path.join(__dirname, 'views')
    
};

const page404 = require('./routes/404');

const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session);


app.use('*', function(req, res, next) {
    console.log(req.protocol);
    
    if(req.protocol == 'https') {
        console.log('in https');
      next();
    } else {
        console.log('in http');
        console.log('host', req.headers.host);
        console.log('url ', req.url);
        console.log('https://' + req.headers.host + req.url);
        res.redirect(301, 'https://' + req.headers.host + req.url);
    }
    
})



app.use((req, res, next) => {
    res.setHeader('Access-Control-allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Expose-Headers', 'Set-Cookie');

    next();
});


const store = new MongoDBStore({
    uri: MONGO_URI,
    databaseName: 'audioshelf',
    collection: 'sessions'
});

store.on('error', error => {
    console.log(error);
});





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'views')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false, store: store }));

app.use('/auth', authRoutes);
// app.use(page404);
app.use('/audio', audioRoutes);
app.use('/audiostore', audiostoreRoutes);


app.use('*', (req, res) => {
    res.sendFile('/index.html', options);
});


mongoose.connect(MONGO_URI).then(() => {
    console.log(PORT);
    app.listen(PORT);
    console.log('connected');
}).catch(error => {
    console.log(error);
})