import express from 'express';
import config from './config/config.js';
import apiRoute from './routes/api.js';
import userRoutes from './routes/user.routes.js';
import authRoutes from './routes/auth.routes.js';
import mediaRoutes from './routes/media.routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';


const app = express();
app.use(express.json());
//parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
//secure apps by setting various HTTP headers
app.use(helmet())
//enable CORS - Cross Origin Resource Sharing
app.use(cors())

//resolved the issue of video not playing CORS: ERR_BLOCKED_BY_RESPONSE.NotSameOrigin CORS Policy
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));

// app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// mount routes
app.use('/api/',apiRoute);
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', mediaRoutes)


//db connect
mongoose.connect(config.mongoUri)
.then(()=>{
    app.listen(4000,()=>{
        console.log('listening on port',config.port);
    })
})
.catch((error)=>{
    console.log(error)
})
