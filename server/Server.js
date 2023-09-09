const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const passportMiddleware = require('./middleware/passport');
const passport = require('passport');

//routes
const userRoutes = require('./routes/users/users');
const boardRoutes = require('./routes/board/board');
const taskRoutes = require('./routes/tasks/task');
const commentRoutes = require('./routes/comment/comment');
const authRoutes = require('./routes/auth')
const milestoneRoutes = require('./routes/milestone/milestone')
const boardInvitationRouter = require('./routes/boardInvitation/boardInvitation')
const notificationRoutes = require('./routes/notification/notification');
const attachmentRouter = require('./routes/attachment/attachment')
const path = require('path');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){res.sendFile(path.join(__dirname,  'index.html'));
});


require('dotenv').config();
const PORT = process.env.PORT || 3000 

//Database Connection
connectDB();
//middleware
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passportMiddleware(passport);

//add Routes
app.use('/api/auth', authRoutes)
app.use('/user',userRoutes)
app.use('/board',boardRoutes)
app.use('/task',taskRoutes)
app.use('/', milestoneRoutes)
app.use('/', commentRoutes)
app.use('/invitation', boardInvitationRouter)
app.use('/notification', notificationRoutes)
app.use('/attachment', attachmentRouter)

//socket io
//Whenever someone connects this gets executed
io.on('connection', function(socket){
  console.log('A user connected');

  // Send a message after a timeout of 4seconds
  setTimeout(function(){
     socket.send('Sent a message 4seconds after connection!');
  }, 4000);
  socket.on('disconnect', function () {
     console.log('A user disconnected');
  });
});

http.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
