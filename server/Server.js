const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const passportMiddleware = require('./middleware/passport');
const passport = require('passport');

//routes
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
const PORT = process.env.PORT || 5000 

//Database Connection
connectDB();
//middleware
app.use(cors({
   origin: 'http://localhost:3000'  // replace with your frontend's port
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
passportMiddleware(passport);

//add Routes
app.use('/api/auth', authRoutes)
app.use('/board', passport.authenticate('jwt', { session: false }),boardRoutes)
app.use('/task',taskRoutes)
app.use('/', milestoneRoutes)
app.use('/', commentRoutes)
app.use('/invitation', boardInvitationRouter)
app.use('/notification', notificationRoutes)
app.use('/attachment', attachmentRouter)

//socket io
users = [];
io.on('connection', function(socket){
   console.log('A user connected');
   socket.on('setUsername', function(data){
      console.log(data);
      if(users.indexOf(data) > -1){
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   });
   socket.on('msg', function(data){
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   })
});
http.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
