const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const userRoutes = require('./routes/users/users');
const boardRoutes = require('./routes/board/board');
const taskRoutes = require('./routes/tasks/task');
const commentRoutes = require('./routes/comment/comment');
const authRoutes = require('./routes/auth')
const passportMiddleware = require('./middleware/passport');
const passport = require('passport');

require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000 

//parse JSON Request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Database Connection
connectDB();

//passport middleware
app.use(passport.initialize());
passportMiddleware(passport);

//Routes
app.use('/api/auth', authRoutes);
app.use('/user',userRoutes)
app.use('/board',boardRoutes)
app.use('/task',taskRoutes)
app.use('/', commentRoutes)
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
});
