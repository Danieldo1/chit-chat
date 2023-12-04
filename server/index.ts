import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import http from 'http'

import "dotenv/config"

const app = express()

const server = http.createServer(app)

const PORT = process.env.PORT || 4000

app.use(cors())

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`)
    
})