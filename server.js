
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const session = require('express-session');
const path = require('path');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('view engine', 'ejs');

// Sessions
app.use(session({
  secret: 'shadh_secret',
  resave: false,
  saveUninitialized: false
}));

// Routes
app.get('/', (req, res) => {
  res.render('index'); // Views/index.ejs
});

// Socket.io
io.on('connection', socket => {
  console.log('User connected');
});

// Start server on Render-assigned port
const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
