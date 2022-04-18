import express from 'express';
import db from './config/dbConnect.js';
import routes from './routes/index.js';

// linking terminal and log from mongodb
db.on('error', console.log.bind(console, 'Connection error!'));
// opening the connection
db.once('open', () => {
    console.log(
        'The connection with the database has been established successfully!'
    );
});

const app = express();

// telling to express that notation json must be used
app.use(express.json());

routes(app);

export default app;
