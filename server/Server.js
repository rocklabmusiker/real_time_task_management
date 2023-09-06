const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
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

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

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
io.on('connection', (socket) => {
  socket.on('message', (message) => {
    console.log('message received'+ message);

    socket.broadcast.emit('message', message);
  });
});

server.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
