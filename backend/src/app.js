const express = require('express')
const cors = require('cors')
const port = process.env.PORT
const userRouter = require('./routers/user')
const siteRouter = require('./routers/site')

require('./db/db')

const app = express()
app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(siteRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})