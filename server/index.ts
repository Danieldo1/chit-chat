import { userProps } from './../client/src/types.d';
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'
import userRouter from './userRoute'

import "dotenv/config"

const app = express()
const server = http.createServer(app)
const PORT = process.env.PORT || 4000
const db = mongoose.connection

app.use(cors())
app.use(express.json())

mongoose.connect(process.env.MONGO_URL!)
db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Database connected')
    server.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`)
        
    })
})

app.use('/',userRouter)