const express = require('express');
require('dotenv').config();

const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const userModel = require('./Models/User');

const IN_PROD = process.env.NODE_ENV === 'production' ? true : false;

userModel.checkConnection();

// Body Parser
app.use(express.json());

// Express session

const session = require('express-session');
app.use(
  session({
    secret: 'secret shh',
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 86400000, // one day
      secure: IN_PROD
    }
  })
);

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/tweets', require('./routes/tweets'));

const port = process.env.PORT || port;

io.on('connection', function(socket) {
  socket.on('follow user', function(uidToFollow) {
    console.log(uidToFollow);
  });
  console.log('connected user');
});
server.listen(port, () => console.log(`Server running on port ${port}`));
