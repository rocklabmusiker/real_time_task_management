const express = require('express')
const cors = require('cors')
const bodyParser =require('body-parser');
const connectDB=require('./config/db');
const userRoutes=require('./routes/users/users')
const boardRoutes=require('./routes/board/board');
const taskRoutes=require('./routes/tasks/task')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 3000

//parse JSON Request
app.use(bodyParser.json());

//Database Connection
connectDB();

//Routes
app.use('/users',userRoutes)
app.use('/board',boardRoutes)
app.use('/task',taskRoutes)
app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
