import { userProps } from './../client/src/types.d';
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'
import userRouter from './userRoute'

import "dotenv/config"

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URL!)
const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'))
const server = http.createServer(app)
const PORT = process.env.PORT || 4000

app.use(cors())


db.once('open', () => {
    console.log('Database connected')
    server.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`)
        
    })
})

app.use('/',userRouter,)